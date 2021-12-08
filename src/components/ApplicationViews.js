import React from "react"
import { Route } from "react-router-dom"
import { Hiring } from "./designers/HiringForm"
import { Homepage } from "./homepage/Homepage"
import { RequestForm } from "./requests/RequestForm"
import { Style } from "./styles/Style"
import { StylePost } from "./styles/StylePost"
import { StylePostForm } from "./styles/StylePostForm"
import { Register } from "./auth/Register"
import { Login } from "./auth/Login"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/homepage">
                <Homepage />
            </Route>

            <Route exact path="/styles">
                <Style />
            </Route>

            <Route exact path="/posts/:styleId(\d+)">
                <StylePost />
            </Route>

            <Route exact path="/posts/create">
                <StylePostForm />
            </Route>

            <Route exact path="/designRequests">
                <RequestForm />
            </Route>

            <Route exact path="/register">
                <Register />
            </Route>

            <Route exact path="/login">
                <Login />
            </Route>

            <Route exact path="/hiring">
                <Hiring />
            </Route>
        </>
    )
}
