import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle, AiFillTikTok, AiFillLinkedin, AiFillInstagram, AiFillYoutube} from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="bg-main-color text-slate-200 text-sm mt-16">
         <Container>
            <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                <FooterList>
                    <h3 className="text-base font-bold">Shop Categories</h3>
                    <Link href="#">Electronics</Link>
                    <Link href="#">Home</Link>
                    <Link href="#">Accessories</Link>
                    <Link href="#">Sports</Link>
                    <Link href="#">Books</Link>
                    <Link href="#">Beauty</Link>
                    <Link href="#">Games</Link>
                </FooterList>
                <FooterList>
                    <h3 className="text-base font-bold">Customer Service</h3>
                    <Link href="#">Contact Us</Link>
                    <Link href="#">Shipping Policy</Link>
                    <Link href="#">Accessories</Link>
                    <Link href="#">Returns and Exchanges</Link>
                    <Link href="#">Watches</Link>
                    <Link href="#">FAQs</Link>
                </FooterList>
                <div className="w-full md:w-1/3 mb-6 md:m-0">
                    <h3 className="text-base font-bold">
                    About Us
                    </h3>
                    <p className="mb-2">
                     Welcome to QuickBuy, your go-to for tech, home, sports, books, beauty, and games. Discover top-notch electronics, stylish home goods, sports gear, captivating reads, beauty essentials, and endless entertainment options. Shop now for innovation, style, and adventure, all in one place.
                    </p>
                    {/* 
                     &copy; is for ©
                     new Date().getFullYear() is for update the year for every year
                    */}
                    <p>&copy; {new Date().getFullYear()} QuickBuy. All right reserved.</p>
                </div>
                <FooterList>
                    <h3 className="text-base font-bold">
                        Follow Us
                    </h3>
                    <div className="flex gap-2">
                        <Link href="#"> <MdFacebook  size={24}/></Link>
                        <Link href="#"> <AiFillLinkedin size={24}/></Link>
                        <Link href="#"> <AiFillTikTok  size={24}/></Link>
                        <Link href="#"> <AiFillInstagram size={24}/></Link>
                        <Link href="#"> <AiFillTwitterCircle  size={24}/></Link>
                        <Link href="#"> <AiFillYoutube size={24}/></Link>
                    </div>
                </FooterList>
            </div>
         </Container>
        </footer>
    );
}
 
export default Footer;