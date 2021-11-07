import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Lottie from "react-lottie";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import animationData from "../lotties/login.json";
import styled from "styled-components";
import ForgotPassword from "./ForgotPassword";

const LoginPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
`;

const SocialText = styled.div`
    color: var(--gray-light);
    display: flex;
    justify-content: center;
    font-size: var(--p1);
`;

const ButtonRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 36px;
`;

const ForgotPasswordLink = styled.div`
    display: flex;
    position: relative;
    justify-content: end;
    margin-top: 10px;
`;

const FormIllustration = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    max-width: 220px;
    width: 100%;
    margin-top: 36px;
`;

const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 344px;
    width: 100%;
`;

const Title = styled.div`
    font-size: var(--h1);
    line-height: 42px;
    font-weight: 700;
    color: var(--black);
`;

export default function Login() {
    const [notification, setNotification] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setNotification(true);
    };

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <>
            <LoginPage>
                <FormIllustration>
                    <Lottie options={defaultOptions} />
                </FormIllustration>
                <LoginForm>
                    <Title>Welcome Back!</Title>
                    <form onSubmit={handleSubmit}>
                        <TextInput
                            type="email"
                            layout="email"
                            placeholder="email"
                        />
                        <TextInput
                            type="password"
                            layout="password"
                            placeholder="password"
                        />
                        <ForgotPasswordLink>
                            <Link to="/forgot-password">Forgot Password?</Link>
                        </ForgotPasswordLink>
                        <Button type="l-m" text="Log in" />
                        <SocialText>Or connect with social</SocialText>
                        <ButtonRow>
                            <Button type="small" text="facebook" />
                            <Button type="small red" text="Google" />
                        </ButtonRow>
                    </form>
                </LoginForm>
            </LoginPage>
        </>
    );
}
