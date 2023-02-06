import React, { useEffect, useState } from "react";

const Modal = ({ products }) => {
    const [currentImage, setCurrentImage] = useState("");

    useEffect(() => {
        if (Object.keys(products).length !== 0) {
            setCurrentImage(products?.images[0]);
        }
    }, [products]);

    if (Object.keys(products).length !== 0) {
        const productImages = products?.images;
        return (
            <div>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <div className="grid grid-cols-2 gap-10">
                            <div>
                                <img src={currentImage} alt="" />
                                <div className="grid grid-cols-6">
                                    {productImages.map((image) => (
                                        <img
                                            onClick={(e) =>
                                                setCurrentImage(image)
                                            }
                                            key={image.id}
                                            src={image}
                                            alt=""
                                            className=" cursor-pointer"
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
