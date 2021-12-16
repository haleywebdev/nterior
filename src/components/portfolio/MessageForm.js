// this module contains the React component to render the message form 
// the initial state is set to an object with the properties of a message object, whose initial values are either empty strings or a boolean
// submitMessage is an event that captures the transient state when the button is clicked (as the user is interacting with the app and making selections)
// using the HTTP request/method to POST the data (permanently) to json
// after the data is posted, we have to fetch the data again since the data has changed
// we re-render the dom and navigate the user back to the correct route (in this case, route the user back to the portfolio page).
// on the portfolio page, the new message is displayed 

import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const MessageForm = () => {
    const [message, updateMessage] = useState({
        userId: 1,
        designerId: 2,
        messageText: "",
        read: false
    })
    const [designer, getDesigner] = useState([])
    const [user, getUser] = useState([])
    const history = useHistory()

    const submitMessage = (evt) => {
        evt.preventDefault()
        const newMessage = {
            userId: parseInt(localStorage.getItem("nterior_user")),
            designerId: message.designerId,
            messageText: message.messageText,
            read: message.read
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        }

        return fetch("http://localhost:8088/messages", fetchOption)
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

    useEffect(
        () => {
            fetch("http://localhost:8088/users")
                .then(res => res.json())
                .then((des) => {
                    getUser(des)
                }
                )
        }, []
    )  

    return (
        <>
            <form className="hireForm">
                <h2 className="hireForm__title">Send A New Message</h2>

                <fieldset>
                    <div className="form-group">
                        <select onChange={
                            (evt) => {
                                const copy = { ...message }
                                copy.designerId = parseInt(evt.target.value)
                                updateMessage(copy)
                            }
                        }
                        >
                            <option value="0">Choose A Recipient...</option>
                            {
                                user.map(
                                    (u) => {
                                    
                                            return <option key={u.id} value={u.id}>
                                                {u.name}
                                            </option>
                                        
                                    })}
                        </select>
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">

                        <input
                            onChange={
                                (evt) => {
                                    const copy = { ...message }
                                    copy.messageText = evt.target.value
                                    updateMessage(copy)
                                }
                            }
                            required autoFocus
                            type="textbox"
                            className="form-control"
                        />
                    </div>
                </fieldset>

                <button className="btn btn-primary" onClick={submitMessage}>
                    Send
                </button>

            </form>

        </>
    )
}
