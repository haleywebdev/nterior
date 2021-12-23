import { Link } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import { MdChair } from "react-icons/md"
import { Button } from "./Button"
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

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }
    const Logout = () => {
        localStorage.removeItem("nterior_user")
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton)

    // using conditional JSX, the navbar renders differently based on the user role 
    // When a user clicks on a link in the navbar, the matching component is rendered

    return (
        <><IconContext.Provider value={{ color: '#fff' }}>
            <nav className="navbar">


                <div className="navbar-container container">
                    <Link className="navbar-logo" to="/Homepage" onClick={closeMobileMenu}>
                        <MdChair className="navbar-icon" />
                        Nterior
                    </Link>
                </div>

                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={click ? "nav-menu active" : "nav-menu"}>

                    <li className="nav-item">
                        <Link className="nav-links" onClick={closeMobileMenu} to="/styles">Design Specialties</Link>
                    </li>

                    <li className="navigation__item active">
                        <Link className="nav-links" onClick={closeMobileMenu} to="/designRequests">Submit A Designer Request</Link>
                    </li>

                    <li className="navigation__item active">
                        <Link className="nav-links" onClick={closeMobileMenu} to="/portfolio">Portfolio</Link>
                    </li>

                    <li className="navigation__item navigation__logout active">
                        <Link className="nav-links" onClick={closeMobileMenu} to="#" onClick={Logout}>Logout</Link>
                    </li>
                </ul>
            </nav>
        </IconContext.Provider>
        </>

    )
}

