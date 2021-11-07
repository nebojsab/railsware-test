import React, { useState, useEffect } from "react";
import { device } from "../helpers/breakpoints";
import lock from "../assets/images/lock.svg";
import lockActive from "../assets/images/lock_active.svg";
import user from "../assets/images/user.svg";
import userActive from "../assets/images/user_active.svg";
import card from "../assets/images/card.svg";
import cardActive from "../assets/images/card_active.svg";
import styled from "styled-components";

const IconUser = styled.div`
    display: block;
    width: 25px;
    height: 25px;
    margin: 0 9px 0 12px;
    background-image: url(${user});
    background-repeat: no-repeat;
    transition: ease-in 0.2s;
`;

const IconLock = styled.div`
    display: block;
    width: 25px;
    height: 25px;
    margin: 0 9px 0 12px;
    background-image: url(${lock});
    background-repeat: no-repeat;
    transition: ease-in 0.2s;
`;

const IconCard = styled.div`
    display: block;
    width: 25px;
    height: 25px;
    margin: 0 9px 0 12px;
    background-image: url(${card});
    background-repeat: no-repeat;
    transition: ease-in 0.2s;
`;

const InputWrapper = styled.div`
    width: 100%;
    max-width: 344px;
    height: 50px;
    margin-top: 36px;
    border: 1px solid var(--gray-inputs);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    transition: ease-in 0.2s;

    &.text__field {
        padding-left: 12px;
    }

    &.text__field--small {
        max-width: 165px;
        width: 100%;
        padding-left: 12px;
    }

    &.focused,
    &:hover {
        border-color: var(--blue);
        ${IconUser} {
            background-image: url(${userActive});
        }
        ${IconLock} {
            background-image: url(${lockActive});
        }
        ${IconCard} {
            background-image: url(${cardActive});
        }
    }
`;

const InputComponent = styled.input`
    border: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    outline: none;
    outline: 0;
    font-size: var(--p1);
    color: var(--dark-gray);

    &:focus,
    &:active {
        color: var(--blue);
    }
`;

const TextInput = ({ onClick, disabled, placeholder, type, layout }) => {
    const [hasFocus, setFocus] = useState(false);

    return (
        <InputWrapper
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            className={`${hasFocus ? "focused" : ""}
        ${
            layout === "small"
                ? "text__field--small"
                : layout === "card"
                ? "text__field--card"
                : layout === "password"
                ? "text__field--pass"
                : layout === "email"
                ? "text__field--email"
                : "text__field"
        } 
    `}
        >
            {layout == "card" ? (
                <IconCard></IconCard>
            ) : layout == "password" ? (
                <IconLock></IconLock>
            ) : layout == "email" ? (
                <IconUser></IconUser>
            ) : null}
            <InputComponent
                required
                placeholder={placeholder}
                layout={layout}
                type={type}
                onClick={!disabled ? onClick : () => {}}
            ></InputComponent>
        </InputWrapper>
    );
};

export default TextInput;
