"use client"

import { useCallback, useState} from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Avatar from "../Avatar";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import BackDrop from "./BackDrop";
import { SafeUser } from "@/types";

interface UserMenuProps {
    currentUser: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen(prev => !prev)
    }, [])

    return ( 
    /* 
    - <></> is a React Fragment
    - React Fragments allow you to group multiple elements without adding extra nodes to the DOM.
    - This is particularly useful when returning multiple elements from a component without wrapping 
      them in an additional HTML element like a div.
    */
       <>
        <div className="relative z-30">
            <div className="p-2 border-[1px] border-main-color flex flex-row items-center gap-1 rounded-full cursor-pointer 
             hover:shadow-md transition text-slate-700" onClick={toggleOpen}>
                <Avatar src={currentUser?.image}/>
                <AiFillCaretDown />
            </div>   
            {isOpen && (
            <div className="absolute rounded-md shadow-sm w-[170px] bg-white overflow-hidden 
            right-0 top-12 text-sm flex flex-col cursor-pointer">
                {currentUser ? 
                        <div className="">
                            <Link href="/orders">
                            <MenuItem onClick={toggleOpen}>
                            Your Orders
                            </MenuItem>
                             </Link>
                            <Link href="/admin">
                             <MenuItem onClick={toggleOpen}>
                              Admin Dashboard
                              </MenuItem>
                                </Link>
                              <hr className={`border-neutral-300`}/>
                               <MenuItem onClick={() => {
                                    toggleOpen();
                                    signOut();
                                 }}>
                                    Logout
                                 </MenuItem>
                            </div>
                  :
                    <div className="">
                    <Link href="/login">
                        <MenuItem onClick={toggleOpen}>
                            Login
                        </MenuItem>
                    </Link>
                    <Link href="/register">
                        <MenuItem onClick={toggleOpen}>
                            Register
                        </MenuItem>
                    </Link>
              </div>
                }
            </div>
            )}
        </div>
        {isOpen ? <BackDrop onCick={toggleOpen} /> : null}
       </>
     );
}
 
export default UserMenu;