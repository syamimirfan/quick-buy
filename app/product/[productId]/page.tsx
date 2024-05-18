import { product } from "@/utils/product";
import ProductDetails from "./ProductDetails";
import Container from "@/app/components/Container";
import ListRating from "../ListRating";

//to navigate cart page just go /product/[productId]
interface IParams {
    productId?: String
}

const Product = ({params} : { params: IParams }) => {
    
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