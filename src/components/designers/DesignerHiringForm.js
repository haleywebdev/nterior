import React, { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const DesignerForm = () => {
    const [designer, updateDesigner] = useState({
        experience: "",
        availability: false,
        fullTime: false,
        rate: "",
        manager: false
    })

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

    return (
        <><fieldset>
            <div className="form-group">
                <label htmlFor="specialty">Experience:</label>
                <input
                    onChange={(evt) => {
                        const copy = { ...designer }
                        copy.experience = evt.target.value
                        updateDesigner(copy)
                    } }
                    required autoFocus
                    type="text"
                    id="specialty"
                    className="form-control"
                    placeholder="Years of Experience" />
            </div>
        </fieldset><fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Are You Applying for A Manager Position?</label>
                    <input
                        onChange={(evt) => {
                            const copy = { ...designer }
                            copy.manager = evt.target.checked
                            updateDesigner(copy)
                        } }
                        type="checkbox" />
                </div>
            </fieldset><fieldset>
                <div className="form-group">
                    <label htmlFor="name">Preferred Pay Rate: </label>
                    <input
                        onChange={(evt) => {
                            const copy = { ...designer }
                            copy.rate = evt.target.value
                            updateDesigner(copy)
                        } }
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
                        } }
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
                        } }
                        type="checkbox" />
                </div>
            </fieldset>
            
            <button className="btn btn-primary" onClick={submitForm}>
                    Submit Your Application
                </button></>

    )
}