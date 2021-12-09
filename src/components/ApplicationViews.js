import React from "react"
import { Route } from "react-router-dom"
import { Hiring, HiringForm } from "./designers/HiringForm"
import { Homepage } from "./homepage/Homepage"
import { RequestForm } from "./requests/RequestForm"
import { Style } from "./styles/Style"
import { StylePost } from "./styles/StylePost"
import { StylePostForm } from "./styles/StylePostForm"
import { Register } from "./auth/Register"
import { Login } from "./auth/Login"
import { RequestList } from "./requests/RequestList"
import { Nterior } from "./Nterior"
import { Hire } from "./designers/Hiring"

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
                <RequestList />
            </Route>

            <Route exact path="/designRequests/create">
                <RequestForm />
            </Route>

            <Route exact path="/login">
                <Login />
            </Route>

            <Route exact path="/hiring">
                <Hire />
            </Route>

            <Route exact path="/hiring/create">
                <HiringForm />
            </Route>
        </>
    )
}
