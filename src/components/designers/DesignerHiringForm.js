// The purpsoe of this module is to render the form for a user to fill out to become a designer for the firm.

import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const DesignerHiringForm = () => {
    const history = useHistory()
    const [designer, updateDesigner] = useState({
        userId: 2,
        experience: "",
        availability: false,
        fullTime: false,
        rate: "",
        manager: false
    })

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

    const submitForm = (evt) => {
        evt.preventDefault()
        const newForm = {
            userId: parseInt(localStorage.getItem("nterior_user")),
            experience: designer.experience,
            availability: designer.availability,
            fullTime: designer.fullTime,
            rate: designer.rate
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newForm)
        }

        return fetch("http://localhost:8088/designers", fetchOption)
            .then(() => {
                history.push("/homepage")
            })
    }

    return (
        <> <h2>Join Our Firm!</h2>
            {
                users
                    ?
                    <>

                        <fieldset>
                            <div className="form-group">
                                <label htmlFor="specialty">Experience:</label>
                                <input
                                    onChange={(evt) => {
                                        const copy = { ...designer }
                                        copy.experience = evt.target.value
                                        updateDesigner(copy)
                                    }}
                                    required autoFocus
                                    type="text"
                                    id="specialty"
                                    className="form-control"
                                    placeholder="Years of Experience" />
                            </div>
                        </fieldset>

                        <fieldset>
                            <div className="form-group">
                                <label htmlFor="name">Preferred Pay Rate: </label>
                                <input
                                    onChange={(evt) => {
                                        const copy = { ...designer }
                                        copy.rate = evt.target.value
                                        updateDesigner(copy)
                                    }}
                                    required autoFocus
                                    type="number"
                                    id="hourly"
                                    className="form-control"
                                    placeholder="Please enter your preferred pay rate" />
                            </div>
                        </fieldset><fieldset>
                            <div className="form-group">
                                <label htmlFor="manager">Immediate Availability?</label>
                                <input
                                    onChange={(evt) => {
                                        const copy = { ...designer }
                                        copy.availability = evt.target.checked
                                        updateDesigner(copy)
                                    }}
                                    type="checkbox" />
                            </div>
                        </fieldset><fieldset>
                            <div className="form-group">
                                <label htmlFor="full-time">Applying full time?</label>
                                <input
                                    onChange={(evt) => {
                                        const copy = { ...designer }
                                        copy.fullTime = evt.target.checked
                                        updateDesigner(copy)
                                    }}
                                    type="checkbox" />
                            </div>
                        </fieldset><button className="btn btn-primary" onClick={submitForm}>
                            Submit Your Application
                        </button>

                    </>
                    :

                    <div><p>In order to submit an application, <Link to={`/register`}>please create an account.</Link></p>

                    </div>
            }
        </>

    )
}