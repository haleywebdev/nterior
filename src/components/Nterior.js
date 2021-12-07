import React from "react"
import { CustomerList } from "./users/CustomerList"
import { DesignerList } from "./users/DesignerList"
import { StyleList } from "./styles/StylesList"
import { RequestList } from "./requests/RequestList"

export const Nterior = () => {

    return (
        <>
            <h1>Nterior</h1>
            <h3>Designer's List</h3>
            <DesignerList />
            <h3>Customer's List</h3>
            <CustomerList />
            <h3>Style's List</h3>
            <StyleList />
            <h3>Design Request's List</h3>
            <RequestList />
        </>
    )
}
