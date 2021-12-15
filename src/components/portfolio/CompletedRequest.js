import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const CompletedRequest = () => {
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
            {designRequests.map(
                (designRequestObj) => {
                    if (designer) {
                        if (designer.id === designRequestObj.designerId && designRequestObj.completed === true) {
                            return <ul key={`request--${designRequestObj.id}`}><Link to={`/designRequests/${designRequestObj.id}`}>{designRequestObj.description}</Link></ul>
                        }
                    }
                }
            )}
        </>
    )

}