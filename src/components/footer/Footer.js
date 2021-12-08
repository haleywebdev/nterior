import React from "react"
import { Link } from "react-router-dom"
import "./Footer.css"

export const Footer = (props) => {
    return (
        <ul className="navbar">

            <footer><p>(c) Nterior Design, a Nashville based interior design firm.</p>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/hiring">Join Our Firm!</Link>
            </li></footer>


        </ul>
    )
}
