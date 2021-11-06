import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/login.json";

export default function Login() {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div>
            <Lottie options={defaultOptions} />
        </div>
    );
}
