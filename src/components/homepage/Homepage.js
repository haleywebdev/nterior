import React, { useEffect, useState } from "react"
import { DesignerList } from "../designers/DesignerList"

export const Homepage = () => {
    return (
    <>
        <h1>Nterior</h1>
        <p>A Nashville based interior design firm.</p>
        <h3>Meet Our Designers</h3>
        <DesignerList /> 
        </>
        )
}