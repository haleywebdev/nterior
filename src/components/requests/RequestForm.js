import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min"

export const RequestForm = () => {
    const [userDesigner, getDesigner] = useState([])
    const [chosenDesigner, setChosenDesigner] = useState(0)

    const [request, updateRequest] = useState({
        userId: 1,
        designerId: 1,
        room: "",
        windows: 6,
        doors: 2,
        dimensions: "",
        description: ""
    })

    const { designerId } = useParams()
    const history = useHistory()

    // this is the object we want to send to the api

    const submitRequest = (evt) => {
        evt.preventDefault()
        const newRequest = {
            userId: parseInt(localStorage.getItem("nterior_user")),
            designerId: setChosenDesigner,
            room: request.room,
            windows: request.window,
            doors: request.door, 
            dimensions: request.dimension,
            description: request.description
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRequest)
        }

        // when something new has been created in the API, we want to send the user immediately back to the service tickets to see what has been added to the list.
        // we use the history mechanism to programatically change it! 

        return fetch("http://localhost:8088/designRequests", fetchOption)
            .then(() => {
                history.push("/requests")
            })
    }

    useEffect(
        () => {
            return fetch(`http://localhost:8088/designers?_expand=user&userId=${designerId}`)
                .then(res => res.json())
                .then((designersArray) => {
                    getDesigner(designersArray)
                })
        },
        [designerId]
    )

    return (
        <>
            <form className="ticketForm">
                <h2 className="ticketForm__title">New Design Request</h2>
                <fieldset>Choose A Designer...</fieldset>
                <fieldset>Choose A Room...</fieldset>
                <fieldset>Number of Windows:</fieldset>
                <fieldset>Number of Doors:</fieldset>
                <fieldset>Room Dimensions:</fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = { ...request }
                                    copy.description = evt.target.value
                                    updateRequest(copy)
                                }
                            }
                            required autoFocus
                            type="text"
                            id="desription"
                            className="form-control"
                            placeholder="Describe your needs..."
                        />
                    </div>
                </fieldset>
                <button className="btn btn-primary" onClick={submitRequest}>
                    Submit Request
                </button>
            </form>
        </>
    )
}
