import React from "react";

const ProductCard = ({ product, setProducts }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="img-card relative">
                    <figure className="w-full overflow-hidden relative rounded-3xl img">
                        <img src={product.images[1]} alt={product.title} />
                        <img
                            src={product.images[0]}
                            className="img2 absolute top-0 left-0 hidden z-10"
                            alt={product.title}
                        />
                    </figure>
                    <div className="card-actions product-details">
                        <label
                            onClick={() => setProducts(product)}
                            htmlFor="my-modal"
                            className="img2 w-full text-black font-bold hidden z-10 bg-gray-100 opacity-70 text-center absolute bottom-0 py-3 cursor-pointer"
                        >
                            Quick View
                        </label>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{product.title}</h2>
                    <p className="text-xl font-bold">${product.price}</p>
                    <p className="font-bold bg-black btn hover:bg-gray-500 transition duration-300">
                        Add To Cart
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
