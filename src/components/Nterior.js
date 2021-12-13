import React from "react";
import { Route } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Footer } from "./footer/Footer";
import "./Nterior.css";

export const Nterior = () => {

    return (
        <>
            <Route
                render={() => {
                    return (
                        <>
                            <NavBar />
                            <ApplicationViews />
                        </>
                    )
                }} />


            <Footer />
        </>


    )
}



