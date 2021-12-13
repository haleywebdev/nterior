import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Footer } from "./footer/Footer";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./Nterior.css";

export const Nterior = () => {

    return (
        <>
            <Route
                render={() => {
                    if (localStorage.getItem("nterior_user")) {
                        return (
                            <>
                                <NavBar />
                                <ApplicationViews />
                            </>
                        );
                    } else {
                        return <Redirect to="/login" />;
                    }
                }} />

            <Footer />
            <Route path="/login">
                <Login />
            </Route><Route path="/register">
                <Register />
            </Route></>

    )
}



