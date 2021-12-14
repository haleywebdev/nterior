import React from "react"
import { Route } from "react-router-dom"
import { Homepage } from "./homepage/Homepage"
import { RequestForm } from "./requests/RequestForm"
import { Style } from "./styles/Style"
import { StylePost } from "./styles/StylePost"
import { StylePostForm } from "./styles/StylePostForm"
import { Login } from "./auth/Login"
import { DesignerHiringForm } from "./designers/DesignerHiringForm"
import { Portfolio } from "./portfolio/Portfolio"
import { MessageForm } from "./portfolio/MessageForm"
import { Register } from "./auth/Register"
import { Request } from "./requests/Request"

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

            <Route exact path="/designRequests/:requestId(\d+)">
                <Request />
            </Route>

            <Route exact path="/portfolio">
                <Portfolio />
            </Route>

            <Route exact path="/messages/create">
                <MessageForm />
            </Route>

            <Route exact path="/login">
                <Login />
            </Route>

            <Route exact path="/register">
                <Register />
            </Route>

            <Route exact path="/hiring">
                <DesignerHiringForm />
            </Route>


        </>
    )
}
