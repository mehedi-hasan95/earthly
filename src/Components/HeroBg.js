import React from "react";
import Typewriter from "typewriter-effect";

const HeroBg = () => {
    return (
        <div className="fixedBg my-10 grid place-content-center h-screen text-center">
            <div className="fuck">
                <h2 className="text-9xl text-green-700 font-extrabold">
                    WE ARE <br />
                    <span>
                        <Typewriter
                            options={{
                                strings: ["AWESOME"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                </h2>
            </div>
        </div>
    );
};

export default HeroBg;
