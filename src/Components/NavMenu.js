import React from "react";
import { BsCart } from "react-icons/bs";

const NavMenu = () => {
    return (
        <div className="bg-[#C91442] py-5 text-white">
            <div className="flex justify-between items-center container mx-auto">
                <div>
                    <h2 className="text-3xl">earthly</h2>
                    <p>Sustainable products at affordable prices</p>
                </div>
                <div className="flex gap-5 items-center">
                    <a href="#" alt="#">
                        Home
                    </a>
                    <a href="#" alt="#">
                        Shop
                    </a>
                    <BsCart />
                </div>
            </div>
        </div>
    );
};

export default NavMenu;
