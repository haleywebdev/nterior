import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"

export const Request = () => {
    const [request, completeRequest] = useState({})
    const [designRequests, getDesignRequests] = useState([])
    const [designer, getDesigner] = useState([])
    const [users, setUsers] = useState()
    const currentUser = parseInt(localStorage.getItem("nterior_user"))
    const { requestId } = useParams()
    const history = useHistory()

    useEffect(
        () => {
            return fetch(`http://localhost:8088/designRequests/${requestId}?_expand=user&_expand=designer&_expand=style`)
                .then(response => response.json())
                .then((data) => {
                    completeRequest(data)
                })

        },
        [requestId]
    )

    const Req = (evt) => {

        const updatedRequest = {
            userId: parseInt(localStorage.getItem("nterior_user")),
            designerId: request.designerId,
            styleId: request.designerId,
            room: request.room,
            windows: request.windows,
            doors: request.doors,
            dimensions: request.dimensions,
            description: request.description,
            completed: true
        }
        fetch(`http://localhost:8088/designRequests/${requestId}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(updatedRequest)
        })
            .then(() => {
                history.push("/portfolio")
            })
    }

    const getCurrentUser = () => {
        return fetch(`http://localhost:8088/users?id=${currentUser}`)
            .then(res => res.json())
            .then(data => setUsers(data[0]))
    }

    useEffect(() => {
        getCurrentUser()
    }, [])

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

    const deleteRequest = (id) => {
        fetch(`http://localhost:8088/designRequests/${id}`, {
            method: "DELETE"
        })
            .then(
                () => {
                    fetchRequests()
                }
            )
            .then(() => {
                history.push("/portfolio")
            })
    }

    useEffect(
        () => {
            fetch("http://localhost:8088/designers?_expand=user")
                .then(res => res.json())
                .then((des) => {
                    getDesigner(des)
                }
                )
        }, []
    )

    const completedButton = () => {
    if (request.completed === false) {
        return <div className="request__completed">
        <button
            id="comp"
            value={request.completed}
            onClick={Req}>Mark As Complete</button>
    </div>
    } else {
        return ""
    }}

    return (
        <>
            <h2>Request Details</h2>

            <section className="">
                <div className="request__user">Submitted by: {request.user?.name}</div>
                <div className="request_designer">
                    {
                        designer.map(
                            (d) => {
                                if (users.id === d.userId && d.user.designer === true) {
                                    return <div key={`d--${d.id}`}>Designed by: {d.user.name}
                                    </div>
                                }
                            })}
                </div>
                <div className="request__style">Style: {request.style?.style}</div>
                <div className="request__room">Room: {request.room}</div>
                <div className="request__windows">Windows: {request.windows}</div>
                <div className="request__doors">Doors: {request.doors}</div>
                <div className="request__dimensions">Dimensions: {request.dimensions}</div>
                <div className="request__description">Description: {request.description}</div>
                {
                    users?.designer ?

                completedButton()

                :

                <><button onClick={() => { deleteRequest(request.id) }}>Cancel Request</button></>

                }
            </section>

        </>
    )
}