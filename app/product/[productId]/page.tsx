import ProductDetails from "./ProductDetails";
import Container from "@/app/components/Container";
import ListRating from "../ListRating";
import { products } from "@/utils/products";

//to navigate cart page just go /product/[productId]
interface IParams {
    productId?: String
}

const Product = ({params} : { params: IParams }) => {
    
    const product = products.find((item) => item.id === params.productId);

    return ( 
        <div className="">
            <Container>
                <ProductDetails product = {product} />
                <div className="flex flex-col mt-20 gap-4">
                    <div className="">Add Rating</div>
                    <ListRating product={product}/>
                </div>
            </Container>
        </div>
     );
}
 
export default Product;