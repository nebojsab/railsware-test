import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Login from "./pages/Login";
import Payments from "./pages/Payments";
import ForgotPassword from "./pages/ForgotPassword";
import { device } from "./helpers/breakpoints";
import styled from "styled-components";

const Header = styled.div``;

const MenuToggler = styled.div`
    position: fixed;
    top: 24px;
    right: 24px;
    font-size: var(--p2);
    font-weight: 600;
    color: var(--black);
    text-transform: uppercase;
    cursor: pointer;
    transition: ease-in-out 0.2s;

    &.is-toggled {
        text-decoration: line-through;
        opacity: 0.5;
        transition: ease-in-out 0.2s;
    }
`;

const MenuListItem = styled.li`
    color: var(--black);
    font-size: var(--p2);
    padding: 12px 0;
    text-align: right;
    width: 200px;

    @media ${device.mobile} {
        text-align: left;
        width: 124px;
    }

    a {
        position: relative;

        &::after {
            position: absolute;
            content: "";
            width: 0;
            height: 1px;
            background-color: var(--black);
            bottom: -4px;
            left: 0;
        }
    }

    &:hover {
        a::after {
            width: 100%;
            transition: width ease-in 0.3s;
        }
    }

    &.login {
        position: absolute;
        top: 0;
        right: -200px;
        transition: ease-in-out 0.2s;

        &.is-opened {
            right: 24px;
        }
        @media ${device.mobile} {
            top: -50px;

            &.is-opened {
                right: calc(100% - 148px);
            }
        }
    }

    &.pass {
        position: absolute;
        top: 48px;
        right: -200px;
        transition: ease-in-out 0.2s;
        transition-delay: 0.2s;

        &.is-opened {
            right: 24px;
        }
        @media ${device.mobile} {
            top: -50px;

            &.is-opened {
                right: calc(100% - 220px);
            }
        }
    }

    &.card {
        position: absolute;
        top: 96px;
        right: -200px;
        transition: ease-in-out 0.2s;
        transition-delay: 0.4s;

        &.is-opened {
            right: 24px;
        }
        @media ${device.mobile} {
            top: -50px;

            &.is-opened {
                right: calc(100% - 370px);
            }
        }
    }

    &:hover {
        opacity: 0.7;
    }

    a {
        color: var(--black);
    }
`;

const MenuList = styled.ul`
    position: absolute;
    top: 60px;
    right: 0;
    list-style: none;
    transition: ease-in-out 0.2s;

    @media ${device.mobile} {
        left: 0;
        width: 100%;
    }
`;

const App = () => {
    const [isMenuOpen, setMenuOpen] = React.useState(false);
    const toggle = () => setMenuOpen((e) => !e);

    return (
        <React.StrictMode>
            <div>
                <Header>
                    <MenuToggler
                        className={`menu__toggler ${
                            isMenuOpen ? "is-toggled" : ""
                        }`}
                        onClick={toggle}
                    >
                        menu
                    </MenuToggler>
                    <MenuList>
                        <MenuListItem
                            className={`menu__list login ${
                                isMenuOpen ? "is-opened" : ""
                            }`}
                        >
                            <Link onClick={toggle} to="/">
                                Login
                            </Link>
                        </MenuListItem>
                        <MenuListItem
                            className={`menu__list pass ${
                                isMenuOpen ? "is-opened" : ""
                            }`}
                        >
                            <Link onClick={toggle} to="/forgot-password">
                                Forgot Password
                            </Link>
                        </MenuListItem>
                        <MenuListItem
                            className={`menu__list card ${
                                isMenuOpen ? "is-opened" : ""
                            }`}
                        >
                            <Link onClick={toggle} to="/payment">
                                Get Pro
                            </Link>
                        </MenuListItem>
                    </MenuList>
                </Header>
                <Router>
                    <Login path="/" />
                    <ForgotPassword path="/forgot-password" />
                    <Payments path="/payment" />
                </Router>
            </div>
        </React.StrictMode>
    );
};

render(<App />, document.getElementById("root"));
