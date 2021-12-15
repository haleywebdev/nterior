import React from "react"
import { DesignerList } from "../designers/DesignerList"
import { Request } from "../requests/Request"

export const Homepage = () => {
    return (
        <>
            <p>
                <div><center><h1>Nterior</h1>
                    <h2><em>Design: Inspired by you.</em></h2></center></div>
                <center><div>We are a full service interior design firm based in Nashville, Tennessee.</div>
                    <div>We'll lead the way through design inception, space planning, furnishing and fixture selection, as well as construction and installation.</div>
                    <div>Each project is a culmination of carefully chosen details by our designers, inspired by you.</div></center></p>

            <p><center><h3>Meet Our Designers</h3></center></p>
            <center><DesignerList /></center>
            <p><center><Request /></center></p>
        </>

    )
}