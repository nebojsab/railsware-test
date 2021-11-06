import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Login from "./pages/Login";
import Payments from "./pages/Payments";
import ForgotPassword from "./pages/ForgotPassword";
import { device } from "./helpers/breakpoints";
import styled from "styled-components";

const App = () => {
    return (
        <React.StrictMode>
            <div>
                <header>
                    <ul>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                        <li>
                            <Link to="/forgot-password">Forgot Password</Link>
                        </li>
                        <li>
                            <Link to="/payment">Get Pro</Link>
                        </li>
                    </ul>
                </header>
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
