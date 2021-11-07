import React, { useState } from "react";
import Lottie from "react-lottie";
import { Router, Link } from "@reach/router";
import animationData from "../lotties/card.json";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import styled from "styled-components";

const ForgotPasswordPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin: 80px auto 0;
    width: 100%;
`;

const FormIllustration = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    max-width: 284px;
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

const InputRow = styled.div`
    display: flex;
    justify-content: space-between;

    ${TextInput} {
        max-width: 165px;
    }
`;

export default function Payments() {
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
                <Title>Get Pro Account</Title>
                <FormIllustration>
                    <Lottie options={defaultOptions} />
                </FormIllustration>
                <Form>
                    <form onSubmit={handleSubmit}>
                        <TextInput
                            type="text"
                            layout="card"
                            placeholder="Card Number"
                        />
                        <InputRow>
                            <TextInput
                                layout="small"
                                type="text"
                                placeholder="MM/YY"
                            />
                            <TextInput
                                layout="small"
                                type="text"
                                placeholder="CCV"
                            />
                        </InputRow>
                        <TextInput type="text" placeholder="ZIP/Postal Code" />
                        <Button type="red" text="Reset" />
                    </form>
                </Form>
            </ForgotPasswordPage>
        </>
    );
}
