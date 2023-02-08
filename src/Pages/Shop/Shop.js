import React from "react";
import HeroBg from "../../Components/HeroBg";
import NavMenu from "../../Components/NavMenu";
import Paralax from "../../Components/Paralax";
import Products from "../../Components/Products";

const Shop = () => {
    return (
        <div>
            <NavMenu />
            <Products />
            <Paralax />
            <HeroBg />
        </div>
    );
};

export default Shop;
