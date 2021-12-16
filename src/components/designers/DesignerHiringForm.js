// The purpsoe of this module is to render the form for a user to fill out to become a designer for the firm.

import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min"

// this component renders the form to hire a designer

export const DesignerHiringForm = () => {
    const history = useHistory() // history is a hook that gives access to history the user can navigate to. alternative to Link.
    const [designer, updateDesigner] = useState({
        userId: 2,
        experience: "",
        availability: false,
        fullTime: false,
        rate: "",
        manager: false
    }) //useState returns the initial state variables and then a function to update it 

    const [users, setUsers] = useState()
    const currentUser = parseInt(localStorage.getItem("nterior_user"))

    const getCurrentUser = () => {
        return fetch(`http://localhost:8088/users?id=${currentUser}`)
            .then(res => res.json())
            .then(response => setUsers(response[0]))
    }

    useEffect(() => {
        getCurrentUser()
    }, []) // this userEffect will only run on the first render 

    const submitForm = (evt) => {
        evt.preventDefault()
        const newForm = {
            userId: parseInt(localStorage.getItem("nterior_user")),
            experience: designer.experience,
            availability: designer.availability,
            fullTime: designer.fullTime,
            rate: designer.rate
        } // this form tracks transient state as the user is interacting with the application

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newForm)
        } // this fetchOption is the POST method/HTTP request to send the data the user chose to state permanently 

        return fetch("http://localhost:8088/designers", fetchOption)
            .then(() => {
                history.push("/homepage")
            })
    } // this fetch call updates the list of designers after state has changed and navigates the user to the homepage 

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
                                        // since state cannot be directly modified, we make a copy of it
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
                        </button> {/* once the user clicks on the button to submit, the state will be permanently stored */}

                    </>
                    :

                    <div><p>In order to submit an application, <Link to={`/register`}>please create an account.</Link></p>

                    </div>
            }
        </>

    )
}