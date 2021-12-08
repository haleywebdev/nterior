import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min"

export const RequestForm = () => {
    const [userDesigner, getDesigner] = useState([])
    const [chosenDesigner, setChosenDesigner] = useState(0)

    const [request, updateRequest] = useState({
        userId: 1,
        designerId: 1,
        styleId: 1,
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
            designerId: 1,
            styleId: 1,
            room: request.room,
            windows: request.windows,
            doors: request.doors,
            dimensions: request.dimensions,
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
                history.push("/designRequests")
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
                <p>Please create an account in order to submit a request.</p>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="location">Designers: </label>
                        <select value={request.designerId}
                            onChange={
                                (evt) => {
                                    // you cannot directly modify state. you must make a copy of state using ...
                                    const copy = { ...request }
                                    copy.designerId = evt.target.value
                                    updateRequest(copy)
                                }
                            } >
                            <option name="designers">Choose A Designer...</option>
                            <option name="1">Wilfrid Pagac</option>
                            <option name="2">Elody Brekke</option>
                            <option name="3">Roderick Bernhard</option>
                            <option name="4">Laurianne Senger</option>
                            <option name="5">Emilie Parisian</option>
                            <option name="6">Mozell Auer</option>
                            <option name="7">Raquel Crona</option>
                            <option name="8">Elyse Zboncak</option>
                            <option name="9">Uriel Moen</option>
                        </select></div></fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="location">Style: </label>
                        <select value={request.styleId}
                            onChange={
                                (evt) => {
                                    // you cannot directly modify state. you must make a copy of state using ...
                                    const copy = { ...request }
                                    copy.styleId = evt.target.value
                                    updateRequest(copy)
                                }
                            } >
                            <option name="styles">Choose A Style...</option>
                            <option name="modern">Modern</option>
                            <option name="contemporary">Contemporary</option>
                            <option name="mid-century">Mid-Century</option>
                            <option name="art-deco">Art Deco</option>
                            <option name="minimalist">Minimalist</option>
                            <option name="Scandinavian">Scandinavian</option>
                            <option name="Eclectic">Eclectic</option>
                            <option name="Industrial">Industrial</option>
                            <option name="Farmhouse">Farmhouse</option>
                        </select>

                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="location">Room: </label>
                        <select value={request.room}
                            onChange={
                                (evt) => {
                                    // you cannot directly modify state. you must make a copy of state using ...
                                    const copy = { ...request }
                                    copy.room = evt.target.value
                                    updateRequest(copy)
                                }
                            } >
                            <option name="styles">Choose A Room...</option>
                            <option name="1">Living Room</option>
                            <option name="2">Bedroom</option>
                            <option name="3">Kitchen</option>
                            <option name="4">Dining Room</option>
                            <option name="5">Bathroom</option>
                        </select>

                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Number of Windows: </label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = { ...request }
                                    copy.windows = evt.target.value
                                    updateRequest(copy)
                                }
                            }
                            required autoFocus
                            type="number"
                            id="hourly"
                            className="form-control"
                            placeholder="Please enter the number of windows in the room"
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Number of Doors: </label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = { ...request }
                                    copy.doors = evt.target.value
                                    updateRequest(copy)
                                }
                            }
                            required autoFocus
                            type="number"
                            id="hourly"
                            className="form-control"
                            placeholder="Please enter the number of doors in the room"
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = { ...request }
                                    copy.dimensions = evt.target.value
                                    updateRequest(copy)
                                }
                            }
                            required autoFocus
                            type="text"
                            id="desription"
                            className="form-control"
                            placeholder="Please enter the dimensions of the room, in feet"
                        />
                    </div>
                </fieldset>

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
                    Submit Your Design Request
                </button>
            </form>
        </>
    )
}
