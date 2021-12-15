import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// this react component renders the pending requests

export const PendingRequest = () => {
    const [designRequests, getDesignRequests] = useState([])
    const [user, setUser] = useState()
    const [designer, setDesigner] = useState()
    const currentUser = parseInt(localStorage.getItem("nterior_user"))

    const fetchRequests = () => {
        fetch(`http://localhost:8088/designRequests?_expand=user`)
            .then(res => res.json())
            .then((request) => {
                getDesignRequests(request)
            }
            )
    }

    useEffect(
        () => {
            fetchRequests()
        }, []
    )


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
        <>
            {
                user?.designer ?

                    <div>{designRequests.map(
                        (designRequestObj) => {
                            if (designer) {
                                if (designer.id === designRequestObj.designerId && designRequestObj.completed === false) {
                                    return <ul key={`request--${designRequestObj.id}`}><Link to={`/designRequests/${designRequestObj.id}`}>{designRequestObj.description}</Link></ul>
                                }
                            }
                        }
                    )}</div>

                    :
                    <div>
                        {designRequests.map(
                            (designRequestObj) => {
                                if (user?.id === designRequestObj.userId) {
                                    return <ul key={`request--${designRequestObj.id}`}><Link to={`/designRequests/${designRequestObj.id}`}>{designRequestObj.description}</Link>
                                    </ul>
                                }
                            }
                        )}</div>
                        
                        }

        </>
    )

}