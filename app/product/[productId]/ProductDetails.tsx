"use client"

import Button from "@/app/components/Button";
import ProductImage from "@/app/components/products/ProductImage";
import SetColor from "@/app/components/products/SetColor";
import SetQuantity from "@/app/components/products/SetQuantity";
import { useCart } from "@/hooks/useCart";
import Rating from "@mui/material/Rating";
import { useCallback, useState } from "react";

interface ProductDetailsProps{
    product: any
}

//make some horizontal line
const Horizontal = () => {
    return <hr className="w-[30%] my-2"/>
}

export type CartProductType = {
    id: string,
    name: string,
    description: string,
    category: string,
    brand: string,
    selectedImg: SelectedImgType,
    qty: number,
    price: number 
}

export type SelectedImgType = {
    color: string,
    colorCode: string,
    image: string
}

const ProductDetails:React.FC<ProductDetailsProps> = ( { product } ) => {

    const {cartTotalQty} = useCart()

    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.category,
        brand: product.brand,
        selectedImg: { ...product.images[0] },
        qty: 1,
        price: product.price
    })
    

    const productRating = product.reviews.reduce((acc : number, item: any) => item.rating + acc, 0) / product.reviews.length

    const handleColorSelect = useCallback((value: SelectedImgType) => {
        setCartProduct((prev) => {
            return { ...prev, selectedImg: value }
        })
    },
    [])
    //cartProduct.selectedImg
    const handleQtyIncrease = useCallback(() => {
        
        if(cartProduct.qty === 99) {
            return ;
        
        }
        setCartProduct((prev) => {
            return { ...prev, qty: prev.qty++}
        })
    }, [cartProduct])

    const handleQtyDecrease = useCallback(() => {

        if(cartProduct.qty === 1) {
            return ;
        }

        setCartProduct((prev) => {
            return { ...prev, qty: prev.qty--}
        })
    }, [cartProduct])

    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10"> 
            <ProductImage cartProduct={cartProduct} product={product} handleColorSelect={handleColorSelect}/>
            <div className="flex flex-col gap-1 text-slate-500 text-sm">
               <h2 className="text-3xl font-medium text-slate-700">  {product.name} </h2>
               <div className="flex items-center gap-2">
                <Rating value={productRating} readOnly/>
                <div className="">{product.reviews.length} reviews </div>
               </div>
               <Horizontal />
               <div className="text-justify">{product.description}</div>
               <Horizontal />
               <div className="">
                    <span className="font-semibold">CATEGORY:</span> {product.category}
               </div>
               <div className="">
                    <span className="font-semibold">BRAND:</span> {product.brand}
               </div>
               <div className={product.inStock ? "text-teal-500" : "text-rose-500"}>
                 {product.inStock ? "In stock" : "Out of stock"}
               </div>
               <Horizontal />
               <SetColor 
                cartProduct={cartProduct}
                images={product.images}
                handleColorSelect={handleColorSelect}
                />
               <Horizontal />
               <SetQuantity cartProduct={cartProduct} handleQtyIncrease={handleQtyIncrease} 
                handleQtyDecrease={handleQtyDecrease}/>
               <Horizontal />
               <div className="max-w-[300px]">
               <Button label="Add to Cart"
                onClick={() => {}}/>
               </div>
            </div>
        </div>
     );
}
 
export default ProductDetails;