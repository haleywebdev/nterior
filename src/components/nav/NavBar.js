import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">

            <li className="navbar__item active">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/designers">Designers</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/designRequests">Requests</Link>
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
