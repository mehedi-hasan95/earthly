import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import ProductCard from "./ProductCard";

const Products = () => {
    const [data, setData] = useState([]);
    const [products, setProducts] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("products.json");
            const data = await res.json();
            setData(data);
        };

        // call the function
        fetchData();
    }, []);
    return (
        <div className="grid grid-cols-3 gap-5 container mx-auto my-5">
            {data.map((product) => (
                <ProductCard
                    key={product.id}
                    setProducts={setProducts}
                    product={product}
                />
            ))}
            <Modal products={products} setProducts={setProducts}></Modal>
        </div>
    );
};

export default Products;
