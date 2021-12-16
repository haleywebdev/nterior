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
import { RequestList } from "./requests/RequestList"

export const ApplicationViews = () => {
    return (
        <>

        {/* Applications views determines which view of the application will be rendered
        The routes which are installed here from react-router-dom are like event listeners,
        listening for when the URL has changed and routing the user to the matching component
        which is imported as a child element on each route. */}

            <Route exact path="/homepage">
                <Homepage />
            </Route>

            <Route exact path="/styles">
                <Style />
            </Route>

            {/* this listens for the user clicking on a style to view the style details */}

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
                <RequestList />
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
