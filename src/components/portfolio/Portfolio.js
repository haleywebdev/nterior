import React, { useEffect, useState } from "react"
import { Favorite } from "../portfolio/Favorite"
import { Message } from "../portfolio/Message"
import { PendingRequest } from "../portfolio/PendingRequest"
import { CompletedRequest } from "../portfolio/CompletedRequest"

// this React component renders the portfolio page

export const Portfolio = () => {
    
    const [user, setUser] = useState()
    const [designer, setDesigner] = useState()
    const currentUser = parseInt(localStorage.getItem("nterior_user"))

    const getCurrentUser = () => {
        return fetch(`http://localhost:8088/users?id=${currentUser}`)
            .then(res => res.json())
            .then(response => {
                setUser(response[0])
                fetch(`http://localhost:8088/designers?userId=${currentUser}`)
                    .then(res => res.json())
                    .then(res => {
                        setDesigner(res[0])
                    })
            })
    }

    useEffect(() => {
        getCurrentUser()
    }, [])


    return (
        <> <h1>My Portfolio</h1>

            {
                user?.designer ?

                    <><div><h3>Pending Requests</h3></div>
                        <PendingRequest />

                        <div><h3>Completed Requests</h3></div>
                        <CompletedRequest />


                        <div><h3>My Messages</h3></div>
                        <Message />
                    </>
                    :
                    <>
                        <div><h3>My Requests</h3></div>
                        <PendingRequest />

                        <div><h3>My Favorites</h3></div>
                        <Favorite />

                        <div><h3>My Messages</h3></div>
                        <Message />
                    </>
            }
        </>
    )
}
