import Container from "../components/Container";
import CartClient from "./CartClient";

//to navigate cart page just go /Cart
const Cart = () => {
    return ( 
        <div className="pt-8">
            <Container>
                <CartClient />  
            </Container>
        </div>
     );
}
 
export default Cart;