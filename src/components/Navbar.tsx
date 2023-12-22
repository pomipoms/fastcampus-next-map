import { useState } from "react";
import Link from "next/link";

import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";



export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="navbar">
            <Link href="/" className="navbar__logo">nextMap</Link>
            <div className="navbar__list">
                <Link href="/stores" className="navbar__list--item">
                    List
                </Link>
                <Link href="/stores/new" className="navbar__list--item">
                    Add
                </Link>
                <Link href="/users/likes" className="navbar__list--item">
                    Likes
                </Link>
                <Link href="/users/login" className="navbar__list--item">
                    Log in
                </Link>
            </div>
        {/* Mobile btn */}
            <div 
                className="navbar__button" 
                role="presentation"
                onClick={()=> setIsOpen((val) => !val)}>
                {isOpen ? <AiOutlineClose /> : <BiMenu />}
            </div>
        {/* Mobile Nav Bar */}
            {isOpen && (
                <div className="navbar--mobile">
                    <div className="navbar__list--mobile">
                        <Link href="/stores" className="navbar__list--item--mobile">
                            List
                        </Link>
                        <Link href="/stores/new" className="navbar__list--item--mobile">
                            Add
                        </Link>
                        <Link href="/users/likes" className="navbar__list--item--mobile">
                            Likes
                        </Link>
                        <Link href="/users/login" className="navbar__list--item--mobile">
                            Log in
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}