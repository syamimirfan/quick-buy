import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import {toast} from 'react-hot-toast';

type CartContextType = {
    cartTotalQty: number;
    cartTotalAmount: number;
    cartProducts: CartProductType[] | null,
    handleAddProductToCart: (product: CartProductType) => void
    handleRemoveProductFromCart: (product: CartProductType) => void
    handleCartQtyIncrease: (product: CartProductType) => void
    handleCartQtyDecrease: (product: CartProductType) => void
    handleClearCart: () => void
}

export const CartContext = createContext<CartContextType | null>(null)

interface Props {
    [propName: string]: any
}

export const CartContextProvider = (props : Props) => {

    const [cartTotalQty, setCartTotalQty] = useState(0)

    const [cartTotalAmount, setCartTotalAmount] = useState(0)

    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null)
    
    useEffect(() =>{
        const cartItems: any = localStorage.getItem("QuickBuyCartItems")
        const cProducts: CartProductType[] | null = JSON.parse(cartItems)

        setCartProducts(cProducts)
    }, []);

    useEffect(() => {
        const getTotals = () => {
            if(cartProducts){
                const {total, qty} = cartProducts?.reduce((acc, item) => {
                    const itemTotal = item.price * item.qty;
    
                    acc.total += itemTotal;
                    acc.qty += item.qty;
    
                    return acc;
                },{
                    total: 0,
                    qty: 0
                })

                setCartTotalQty(qty);
                setCartTotalAmount(total);
            }
        }
        getTotals();
    },[cartProducts])
 
    const handleAddProductToCart = useCallback((product: CartProductType) => {
        setCartProducts((prev) => {
            let updatedCart;

            if(prev){
                updatedCart = [...prev, product];
            }else {
                updatedCart = [product];
            }
            
            localStorage.setItem("QuickBuyCartItems", JSON.stringify(updatedCart));
            return updatedCart;
        })
        //PUT HERE TO AVOID RENDER TWICE FROM REACT STRICT NODE FOR TOAST
        toast.success('Product added to cart');
    }, [])


    const handleRemoveProductFromCart = useCallback((
        product: CartProductType
    ) => {
        if(cartProducts){
            const filteredProducts = cartProducts.filter((item) => {
                return item.id !== product.id
            })

            setCartProducts(filteredProducts)
            toast.success("Product removed");
            localStorage.setItem("QuickBuyCartItems", JSON.stringify(filteredProducts));
        }
    }, [cartProducts])

    const handleCartQtyIncrease = useCallback((
        product: CartProductType
    ) => {
        let updatedCart;

        if(product.qty === 99) {
            return toast.error("Maximum reached")
        }

        if(cartProducts){
            updatedCart = [...cartProducts];

            const existingIndex = cartProducts.findIndex((item) => item.id === product.id);
            
            if(existingIndex > -1){
                updatedCart[existingIndex].qty = ++updatedCart[existingIndex].qty
            }
            
            setCartProducts(updatedCart);
            localStorage.setItem("QuickBuyCartItems", JSON.stringify(updatedCart));
        }
    },[cartProducts])

    const handleCartQtyDecrease = useCallback((
        product: CartProductType
    ) => {
        let updatedCart;

        if(product.qty === 1){
            return toast.error("Minimum reached");
        }

        if(cartProducts){
            updatedCart = [...cartProducts];

            const existingIndex = cartProducts.findIndex((item) => item.id === product.id)

            if(existingIndex > -1){
                updatedCart[existingIndex].qty = --updatedCart[existingIndex].qty;
            }

            setCartProducts(updatedCart);
            localStorage.setItem("QuickBuyCartItems", JSON.stringify(updatedCart))
        }

    },[cartProducts])

    const handleClearCart = useCallback(() => {
        setCartProducts(null);
        setCartTotalQty(0);
        localStorage.setItem("QuickBuyCartItems",JSON.stringify(null))
    },[] )

    const value = {
        cartTotalQty,
        cartTotalAmount,
        cartProducts,
        handleAddProductToCart,
        handleRemoveProductFromCart,
        handleCartQtyIncrease,
        handleCartQtyDecrease,
        handleClearCart
    }

    return <CartContext.Provider value={value} {... props} />
}
export const useCart = () => {
    const context = useContext(CartContext); 

    if(context === null){
        throw new Error("useCart must be used within a CartContextProvider");
    }

    return context;
}