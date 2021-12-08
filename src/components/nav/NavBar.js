import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">

            <li className="navbar__item active">
                <Link className="navbar__link" to="/homepage">Home</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/styles">Styles</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/designRequests">Requests</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/portfolio">My Portfolio</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="#"
                    onClick={
                        () => {
                            localStorage.removeItem("nterior_user")
                        }
                    }>
                    Logout
                </Link>
            </li>

        </ul>
    )
}
