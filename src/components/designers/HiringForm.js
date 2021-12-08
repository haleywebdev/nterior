import React, { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const Hiring = () => {

    const [designer, updateDesigner] = useState({
        userId: 9,
        experience: "",
        availability: true
    })

    const history = useHistory()

    // this is the object we want to send to the api

    const submitForm = (evt) => {
        evt.preventDefault()
        const newForm = {
            name: designer.name,
            experience: designer.experience,
            availability: designer.availability
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

    return (
        <>
            <form className="hiringForm">
                <h2 className="hiringForm">New Hire Application</h2>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = { ...designer }
                                    copy.name = evt.target.value
                                    updateDesigner(copy)
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
                        <label htmlFor="specialty">availability:</label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = { ...designer }
                                    copy.availability = evt.target.value
                                    updateDesigner(copy)
                                }
                            }
                            required autoFocus
                            type="radio"
                            id="specialty"
                            className="form-control"
                            placeholder="Full or Part Time"
                        />
                    </div>
                </fieldset>

                <button className="btn btn-primary" onClick={submitForm}>
                    Submit Application
                </button>
            </form>
        </>
    )
}