import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <>
        
        <nav className="navigation">

            <div className="navigation__icon">
                <Link className="navbar_link" to="/Homepage"><img src="https://i.imgur.com/nuAVWfl.png" width="58" height="58"></img></Link>
            </div>

            <div className="navigation__item active">
                <Link className="navbar__link" to="/styles">Design Specialties</Link>
            </div>

            <div className="navigation__item active">
                <Link className="navbar__link" to="/designRequests">Submit A Design Request!</Link>
            </div>

            <div className="navigation__item active">
                <Link className="navbar__link" to="/portfolio">My Portfolio</Link>
            </div>

            <div className="navigation__item active">
                <Link className="navbar__link" to="/login">
                    Login
                </Link></div>

            <div className="navigation__item active">
                <Link className="navbar__link" to="/register">
                    Create An Account
                </Link></div>

            <div className="navigation__item navigation__logout active">
                <Link className="navbar__link" to="#"
                    onClick={
                        () => {
                            localStorage.removeItem("nterior_user")
                        }
                    }>
                    Logout
                </Link>
            </div>

        </nav>

        </>




    )
}

