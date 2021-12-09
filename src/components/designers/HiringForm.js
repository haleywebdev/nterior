import React, { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const HiringForm = () => {

    const history = useHistory()

    const [user, updateUser] = useState({
        name: "",
        email: "",
        password: "",
        designer: true
    })

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

                <button className="btn btn-primary" onClick={submitUserForm}>
                    Create Your Account
                </button>
            </form>
        </>
    )
}