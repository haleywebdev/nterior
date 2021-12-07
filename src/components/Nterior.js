import React from "react"
import { CustomerList } from "./users/CustomerList"
import { DesignerList } from "./users/DesignerList"

export const Nterior = () => {

    return (
        <>
            <h1>Nterior</h1>
            <h3>Designer's List</h3>
            <DesignerList />
            <h3>Customer's List</h3>
            <CustomerList />
        </>
    )
}
