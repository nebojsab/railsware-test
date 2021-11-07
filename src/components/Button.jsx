import React from "react";
import { device } from "../helpers/breakpoints";
import styled from "styled-components";

const ButtonComponent = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    transition: all ease-in-out 0.2s;
    font-size: var(--p1);
    font-family: var(--body-font-family);
    text-transform: uppercase;
    color: var(--white);
    overflow: hidden;

    &:hover {
        transition: all ease-in-out 0.2s;
    }

    &.primary__button {
        border-radius: 8px;
        background: linear-gradient(
            to bottom,
            var(--blue-light) 50%,
            var(--blue) 50%
        );
        background-size: 100% 200%;
        background-position: left bottom;
        min-width: 344px;
        height: 50px;
        margin: 36px 0;

        &:hover {
            background-position: right top;
        }
    }

    &.primary__button--red {
        border-radius: 8px;
        background: linear-gradient(
            to bottom,
            var(--red-light) 50%,
            var(--red) 50%
        );
        background-size: 100% 200%;
        background-position: left bottom;
        min-width: 344px;
        height: 50px;
        margin: 36px 0;

        &:hover {
            background-position: right top;
        }
    }

    &.primary__button--lm {
        border-radius: 8px;
        background: linear-gradient(
            to bottom,
            var(--blue-light) 50%,
            var(--blue) 50%
        );
        background-size: 100% 200%;
        background-position: left bottom;
        min-width: 344px;
        height: 50px;
        margin: 50px 0;

        &:hover {
            background-position: right top;
        }
    }

    &.button__small {
        border-radius: 5px;
        background: linear-gradient(
            to bottom,
            var(--fb-blue-light) 50%,
            var(--fb-blue) 50%
        );
        background-size: 100% 200%;
        background-position: left bottom;
        max-width: 165px;
        width: 100%;
        height: 40px;

        &:hover {
            background-position: right top;
        }
    }

    &.button__small--red {
        border-radius: 5px;
        background: linear-gradient(
            to bottom,
            var(--google-red-light) 50%,
            var(--google-red) 50%
        );
        background-size: 100% 200%;
        background-position: left bottom;
        max-width: 165px;
        width: 100%;
        height: 40px;

        &:hover {
            background-position: right top;
        }
    }
`;

const Button = ({ children, onClick, disabled, text, type }) => {
    return (
        <ButtonComponent
            className={`button 
        ${
            type === "small"
                ? "button__small"
                : type === "small red"
                ? "button__small--red"
                : type === "red"
                ? "primary__button--red"
                : type === "l-m"
                ? "primary__button--lm"
                : "primary__button"
        } 
    `}
            type={type}
            text={text}
            onClick={!disabled ? onClick : () => {}}
        >
            {children || text}
        </ButtonComponent>
    );
};

export default Button;
