import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const RequestForm = () => {
    const [designers, getDesigners] = useState([])
    const [styles, getStyles] = useState([])
    const [request, updateRequest] = useState({
        designerId: "",
        styleId: "",
        room: "",
        windows: 6,
        doors: 2,
        dimensions: "",
        description: "",
        completed: false
    })
    const history = useHistory()

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

    const submitRequest = (evt) => {
        evt.preventDefault()
        const newRequest = {
            userId: parseInt(localStorage.getItem("nterior_user")),
            designerId: request.designerId,
            styleId: request.styleId,
            room: request.room,
            windows: request.windows,
            doors: request.doors,
            dimensions: request.dimensions,
            description: request.description,
            completed: request.completed
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRequest)
        }

        return fetch("http://localhost:8088/designRequests", fetchOption)
            .then(() => {
                history.push("/portfolio")
            })
    }

    useEffect(
        () => {
            return fetch(`http://localhost:8088/designers?_expand=user`)
                .then(res => res.json())
                .then((designersArray) => {
                    getDesigners(designersArray)
                })
        },
        []
    )

    useEffect(
        () => {
            fetch(`http://localhost:8088/styles`)
                .then(res => res.json())
                .then((data) => {
                    getStyles(data)
                })
        },
        []
    )


    return (
        <><h3>Submit A Design Request!</h3>
            {users ?
                <form className="ticketForm">

                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="location">Designer: </label>
                            <select onChange={
                                (evt) => {
                                
                                    const copy = { ...request }
                                    copy.designerId = parseInt(evt.target.value)
                                    updateRequest(copy)
                                }
                            }
                            >
                                <option value="0">Choose A Designer...</option>
                                {designers.map(d => (
                                    <option key={d.id} value={d.id}>
                                        {d.user.name}
                                    </option>))}
                            </select>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="location">Style: </label>
                            <select onChange={
                                (evt) => {
                                    const copy = { ...request }
                                    copy.styleId = parseInt(evt.target.value)
                                    updateRequest(copy)
                                }
                            }
                            >
                                <option value="0">Choose A Style...</option>
                                {styles.map(s => (
                                    <option key={s.id} value={s.id}>
                                        {s.style}
                                    </option>))}
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
                                className="form-control"
                                placeholder="Please enter the number of doors in the room"
                            />
                        </div>
                    </fieldset>

                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="description">Dimensions:</label>
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
                                id="dimensions"
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
                : <p><Link to={`/register`}>Please create an account.</Link> in order to submit a request.</p>}
        </>
    )
}
