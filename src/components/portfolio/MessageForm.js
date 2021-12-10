import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const MessageForm = () => {
    const [message, updateMessage] = useState({
        designerId: 0,
        messageText: "",
        read: false
    })
    const [users, defineUsers] = useState([])
    const history = useHistory()

    const submitMessage = (evt) => {
        evt.preventDefault()
        const newMessage = {
            userId: parseInt(localStorage.getItem("nterior_user")),
            designerId: parseInt(evt.target.id),
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
                history.push("/messages")
            })
    }

    useEffect(
        () => {
            fetch(`http://localhost:8088/users`)
                .then(res => res.json())
                .then((data) => {
                    defineUsers(data)
                })
        },
        []
    )

    return (
        <>
            <form className="hireForm">
                <h2 className="hireForm__title">Send A New Message</h2>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="location">Choose A Recipient</label>
                        <select onChange={
                            (evt) => {
                                const copy = { ...message }
                                copy.designerId = parseInt(evt.target.id)
                                updateMessage(copy)
                            }
                        }
                        >
                            <option value="0">Choose A Recipient...</option>
                            {users.map(u => (
                                <option key={u.id} value={u.id}>
                                    {u.name}
                                </option>))}
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
