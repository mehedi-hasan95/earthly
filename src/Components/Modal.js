import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ReactImageMagnify from "react-image-magnify";

const Modal = ({ products }) => {
    const [currentImage, setCurrentImage] = useState("");

    useEffect(() => {
        if (Object.keys(products).length !== 0) {
            setCurrentImage(products?.images[0]);
        }
    }, [products]);

    const [quantity, setQuantity] = useState(1);
    if (Object.keys(products).length !== 0) {
        const productImages = products?.images;
        return (
            <div>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <div className="grid grid-cols-2 gap-10">
                            <div>
                                {/* <img
                                    src={currentImage}
                                    alt=""
                                    className="h-[400px]"
                                /> */}
                                {/* Zoom Image  */}
                                <ReactImageMagnify
                                    {...{
                                        smallImage: {
                                            isFluidWidth: true,
                                            src: currentImage,
                                            height: 400,
                                        },
                                        largeImage: {
                                            src: currentImage,
                                            width: 600,
                                            height: 900,
                                        },
                                    }}
                                />
                                <div className="grid grid-cols-6">
                                    {productImages.map((image) => (
                                        <img
                                            onMouseOver={(e) =>
                                                setCurrentImage(image)
                                            }
                                            key={image.id}
                                            src={image}
                                            alt=""
                                            className="cursor-pointer]"
                                        />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">
                                    {products.title}
                                </h3>
                                <p className="py-4 font-bold">
                                    ${products.price}
                                </p>
                                <p className="py-4">{products.description}</p>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text font-bold">
                                            Set of
                                        </span>
                                    </label>
                                    <select className="select select-bordered">
                                        <option disabled selected>
                                            Select
                                        </option>
                                        <option>2</option>
                                        <option>4</option>
                                        <option>8</option>
                                    </select>
                                    <div className="mt-10">
                                        <h2 className="mb-5 font-bold text-xl">
                                            Quantity
                                        </h2>
                                        <button
                                            className="bg-gray-400 h-12 w-12 justify-center items-center"
                                            onClick={() =>
                                                setQuantity((prev) =>
                                                    prev === 1 ? 1 : prev - 1
                                                )
                                            }
                                        >
                                            -
                                        </button>
                                        <span className="mx-4 font-bold">
                                            {quantity}
                                        </span>
                                        <button
                                            className="bg-gray-400 h-12 w-12 justify-center items-center"
                                            onClick={() =>
                                                setQuantity((prev) => prev + 1)
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className="mt-10">
                                        <button className="px-7 py-2 bg-blue-400 flex justify-center items-center gap-3 text-white font-semibold rounded-md">
                                            <FaShoppingCart /> Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn">
                                Close
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Modal;
