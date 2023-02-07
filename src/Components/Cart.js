import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct, resetCart } from "../Redux/counterSlice";

const Cart = () => {
    const products = useSelector((state) => state.cart.products);

    // Redux
    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => {
            total += item.quantity * item.price;
        });
        return total.toFixed(2);
    };

    return (
        <div className="relative">
            <div className="absolute bg-black z-30 right-0 p-5 shadow-lg shadow-blue-200 max-w-sm">
                {products.length > 0 ? (
                    <>
                        <h2 className="text-2xl font-semibold py-5">
                            Products in your Cart
                        </h2>
                        <div className="grid gap-5">
                            {products?.map((item) => (
                                <div className="" key={item.id}>
                                    <div className="flex justify-between gap-5 items-center border-b-2 pb-5">
                                        <img
                                            className="h-28 w-28"
                                            src={item.img}
                                            alt=""
                                        />
                                        <div>
                                            <h2 className="text-xl">
                                                {item.title}
                                            </h2>
                                            <p>{item.desc?.slice(0, 50)}</p>
                                            <span>
                                                {item.quantity} x ${item.price}
                                            </span>
                                        </div>
                                        <AiOutlineDelete
                                            onClick={() =>
                                                dispatch(removeProduct(item.id))
                                            }
                                            className="text-red-500 text-2xl cursor-pointer min-w-[40px]"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-10">
                            <span>Subtotal</span>
                            <span>${totalPrice()}</span>
                        </div>
                        <button className="bg-blue-600 px-5 py-2 text-white font-semibold rounded-md block mt-10">
                            Procced To CheckOut
                        </button>
                        <button
                            onClick={() => dispatch(resetCart())}
                            className="text-red-500 pt-7"
                        >
                            Reset Cart
                        </button>
                    </>
                ) : (
                    <h2 className="py-10 text-2xl">No Products in your Cart</h2>
                )}
            </div>
        </div>
    );
};

export default Cart;
