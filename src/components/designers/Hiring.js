import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

// this component renders what a user without user authorization will see when they click on the hiring link in the footer

export const Hire = () => {

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

    return (
        <>

            <div>
                <h2>Join Our Firm!</h2>
                <p>In order to submit an application, <Link to={`/register`}>please create an account.</Link></p>

            </div>



        </>
    )
}
