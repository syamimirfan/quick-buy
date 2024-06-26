import Link from "next/link";
import Image from "next/image";
import Container from "../Container";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import { getCurrentUser } from "@/actions/getCurrentUser";

const Navbar = async () => {
    const currentUser = await getCurrentUser()
    
    return (
     <div className="sticky top-0 w-full bg-slate-300 z-30 shadow-sm">
        <div className="py-4 border-b-[1px]">
            <Container>
                <div className="flex justify-between items-center gap-3">
                    <Link href="/"><Image src="/assets/logo-text.png" width={200} height={50} alt='quick-buy'
                    /></Link>
                    <div className="hidden md:block">Search</div>
                        <div className="flex items-center gap-8 md:gap-12">
                        <CartCount />
                        <UserMenu currentUser = {currentUser}/>
                    </div>
                </div>      
            </Container>
        </div>
     </div>
    );
}
// main color 2C284C (dark blue)
// secondary color FFE02B (yellow)
export default Navbar;