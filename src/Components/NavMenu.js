import React from "react";
import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const NavMenu = () => {
    const products = useSelector((state) => state.cart.products);
    console.log(products?.length);
    return (
        <div className="bg-[#C91442] py-5 text-white">
            <div className="flex justify-between items-center container mx-auto">
                <div>
                    <h2 className="text-3xl">earthly</h2>
                    <p>Sustainable products at affordable prices</p>
                </div>
                <div className="flex gap-5 items-center">
                    <a href="/" alt="#">
                        Home
                    </a>
                    <a href="#" alt="#">
                        Shop
                    </a>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn m-1">
                            <div className="indicator">
                                <span className="indicator-item badge badge-secondary">
                                    {products?.length}
                                </span>
                                <button className="btn">
                                    <BsCart />
                                </button>
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu p-2 shadow bg-transparent rounded-box w-96"
                        >
                            <Cart />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavMenu;
