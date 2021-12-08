import React from "react"
import { Route } from "react-router-dom"
import { Hiring } from "./designers/HiringForm"
import { Homepage } from "./homepage/Homepage"
import { RequestForm } from "./requests/RequestForm"
import { Style } from "./styles/Style"
import { StylePost } from "./styles/StylePost"

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

            <Route exact path="/designRequests">
                <RequestForm />
            </Route>

            <Route exact path="/hiring">
                <Hiring />
            </Route>
        </>
    )
}
