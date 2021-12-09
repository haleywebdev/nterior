import React, { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const HiringForm = () => {

    const history = useHistory()

    const [designer, updateDesigner] = useState({
        experience: "",
        availability: false,
        fullTime: false,
        rate: "",
        manager: false
    })

    const [user, updateUser] = useState({
        name: "",
        email: "",
        password: "",
        designer: true
    })

    // this is the object we want to send to the api

    const submitForm = (evt) => {
        evt.preventDefault()
        const newForm = {
            userId: parseInt(localStorage.getItem("nterior_user")),
            experience: designer.experience,
            availability: designer.availability,
            fullTime: designer.fullTime,
            rate: designer.rate,
            manager: designer.manager
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newForm)
        }

        // when something new has been created in the API, we want to send the user immediately back to the service tickets to see what has been added to the list.
        // we use the history mechanism to programatically change it! 

        return fetch("http://localhost:8088/designers", fetchOption)
            .then(() => {
                history.push("/designers")
            })
    }

    // this is the object we want to send to the api

    const submitUserForm = (evt) => {
        evt.preventDefault()
        const newUserForm = {
            name: user.name,
            email: user.email,
            password: user.password,
            designer: user.designer
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUserForm)
        }

        // when something new has been created in the API, we want to send the user immediately back to the service tickets to see what has been added to the list.
        // we use the history mechanism to programatically change it! 

        return fetch("http://localhost:8088/users", fetchOption)
            .then(() => {
                history.push("/users")
            })
    }

    return (
        <>
            <form className="hiringForm">
                <button><h2 className="hiringForm">New Hire Application</h2></button>
                <p>Please create an account to fill out the application.</p>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = { ...user }
                                    copy.name = evt.target.value
                                    updateUser(copy)
                                }
                            }
                            required autoFocus
                            type="text"
                            id="name"
                            className="form-control"
                            placeholder="First and Last Name"
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Email:</label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = { ...user }
                                    copy.email = evt.target.value
                                    updateUser(copy)
                                }
                            }
                            required autoFocus
                            type="text"
                            id="name"
                            className="form-control"
                            placeholder="Email Address"
                        />
                    </div>
                </fieldset>

                <fieldset><div className="form-group">
                    <label htmlFor="name">Password:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = { ...user }
                                copy.password = evt.target.value
                                updateUser(copy)
                            }
                        }
                        required autoFocus
                        type="password"
                        id="name"
                        className="form-control"
                        placeholder="Enter A Password"
                    />
                </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="specialty">Experience:</label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = { ...designer }
                                    copy.experience = evt.target.value
                                    updateDesigner(copy)
                                }
                            }
                            required autoFocus
                            type="text"
                            id="specialty"
                            className="form-control"
                            placeholder="Years of Experience"
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="manager">Are You Applying for A Manager Position?</label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = { ...designer }
                                    copy.manager = evt.target.checked
                                    updateDesigner(copy)
                                }}
                            type="checkbox"
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Preferred Pay Rate: </label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = { ...designer }
                                    copy.rate = evt.target.value
                                    updateDesigner(copy)
                                }
                            }
                            required autoFocus
                            type="number"
                            id="hourly"
                            className="form-control"
                            placeholder="Please enter your preferred pay rate"
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="manager">Immediate Availability?</label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = { ...designer }
                                    copy.availability = evt.target.checked
                                    updateDesigner(copy)
                                }}
                            type="checkbox"
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="full-time">Applying full time?</label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = { ...designer }
                                    copy.fullTime = evt.target.checked
                                    updateDesigner(copy)
                                }}
                            type="checkbox"
                        />
                    </div>
                </fieldset>

                <button className="btn btn-primary" onClick={submitForm, submitUserForm}>
                    Submit Application
                </button>
            </form>
        </>
    )
}