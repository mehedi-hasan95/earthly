import React from "react";
import { Parallax } from "react-parallax";

const Paralax = () => {
    const img1 =
        "https://images.unsplash.com/photo-1675723200445-f8298e4c6170?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
    const img2 =
        "https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80";
    const img3 =
        "https://images.unsplash.com/photo-1613339027986-b94d85708995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";
    return (
        <div className="container mx-auto scroll-img">
            <Parallax bgImage={img1} strength={600}>
                <p className="h-screen w-[50%] bg-black text-white place-items-center text-4xl grid text-center">
                    Content goes here. Parallax height grows with content
                    height.
                </p>
            </Parallax>
            <Parallax bgImage={img2} strength={800}>
                <p className="h-screen w-[50%] bg-black text-white place-items-center text-4xl grid text-center">
                    Content goes here. Parallax height grows with content
                    height.
                </p>
            </Parallax>
            <Parallax bgImage={img3} strength={600}>
                <p className="h-screen w-[50%] bg-black text-white place-items-center text-4xl grid text-center">
                    Content goes here. Parallax height grows with content
                    height.
                </p>
            </Parallax>
        </div>
    );
};

export default Paralax;
