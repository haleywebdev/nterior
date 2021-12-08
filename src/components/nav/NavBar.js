import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <><ul className="navbar">

            <li className="navbar__item active">
                <Link className="navbar_link" to="/homepage"><img src="https://i.imgur.com/nuAVWfl.png" width="58" height="58"></img></Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/styles">Design Specialties</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/designRequests">Submit A Design Request!</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/portfolio">My Portfolio</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/login">
                    Login
                </Link></li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/register">
                    Create An Account
                </Link></li></ul>

        </>

        /* <li className="navbar__item active">
  <Link className="navbar__link" to="#"
      onClick={() => {
          localStorage.removeItem("nterior_user")
      }}>
      Logout
  </Link>
</li> */




    )
}

