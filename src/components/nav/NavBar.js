import { Link } from "react-router-dom"
import React, { useEffect, useState } from "react"
import "./NavBar.css"

// controller component

export const NavBar = (props) => {

    const [users, setUsers] = useState()
    const currentUser = parseInt(localStorage.getItem("nterior_user"))

    const getCurrentUser = () => {
        return fetch(`http://localhost:8088/users?id=${currentUser}`)
            .then(res => res.json())
            .then(response => setUsers(response[0]))
    }

    useEffect(() => {
        getCurrentUser()
    }, [])

    // using conditional JSX, the navbar renders different based on the user role 
    // When a user clicks on a link in the navbar, the matching component is rendered

    return (
        <>
            <nav className="navigation">

                {
                    users ?

                        <><div className="navigation__icon">
                            <Link className="navbar_link" to="/Homepage"><img alt="" src="https://i.imgur.com/nuAVWfl.png" width="58" height="58"></img></Link>
                        </div><div className="navigation__item active">
                                <Link className="navbar__link" to="/styles">Design Specialties</Link>
                            </div><div className="navigation__item active">
                                <Link className="navbar__link" to="/designRequests">Submit A Design Request!</Link>
                            </div><div className="navigation__item active">
                                <Link className="navbar__link" to="/portfolio">My Portfolio</Link>
                            </div><div className="navigation__item navigation__logout active">
                                <Link className="navbar__link" to="#"
                                    onClick={() => {
                                        localStorage.removeItem("nterior_user")
                                    }}>
                                    Logout
                                </Link>
                            </div></>

                        :

                        <><div className="navigation__icon">
                            <Link className="navbar_link" to="/Homepage"><img alt="" src="https://i.imgur.com/nuAVWfl.png" width="58" height="58"></img></Link>
                        </div><div className="navigation__item active">
                                <Link className="navbar__link" to="/styles">Design Specialties</Link>
                            </div><div className="navigation__item active">
                                <Link className="navbar__link" to="/designRequests">Submit A Design Request!</Link>
                            </div><div className="navigation__item active">
                                <Link className="navbar__link" to="/login">
                                    Login
                                </Link></div><div className="navigation__item active">
                                <Link className="navbar__link" to="/register">
                                    Create An Account
                                </Link></div></>

                }
            </nav>

        </>

    )
}

