import React, { useState } from "react";
import Lottie from "react-lottie";
import { Router, Link } from "@reach/router";
import animationData from "../lotties/forgetPassword.json";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import styled from "styled-components";

const ButtonEl = styled(Button)`
    margin-top: 36px !important;
`;

const ForgotPasswordPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
`;

const FormIllustration = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    max-width: 220px;
    width: 100%;
    margin-top: 36px;
`;

const Form = styled.div`
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

const LoginCTA = styled.div`
    margin-top: 200px;
    color: var(--gray-light);
    font-size: var(--p1);
`;

export default function ForgotPassword() {
    const [notification, setNotification] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setNotification(true);
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <>
            <ForgotPasswordPage>
                <FormIllustration>
                    <Lottie options={defaultOptions} />
                </FormIllustration>
                <Form>
                    <Title>Forgot Password</Title>
                    <form onSubmit={handleSubmit}>
                        <TextInput
                            type="email"
                            layout="email"
                            placeholder="email"
                        />
                        <ButtonEl type="submit" text="Reset" />
                    </form>
                </Form>
                <LoginCTA>
                    Already have an account? <Link to="/">Login here</Link>
                </LoginCTA>
            </ForgotPasswordPage>
        </>
    );
}
