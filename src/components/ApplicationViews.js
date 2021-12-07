import React from "react"
import { Route } from "react-router-dom"
import { RequestList } from "./requests/RequestList"
import { CustomerList } from "./users/CustomerList"
import { DesignerList } from "./users/DesignerList"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/customers">
                <CustomerList />
            </Route>
            <Route path="/designers">
                <DesignerList />
            </Route>
            <Route path="/designRequests">
                <RequestList />
            </Route>
        </>
    )
}
