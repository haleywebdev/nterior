import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const Message = () => {
    const [messages, getMessages] = useState([])
    const [user, setUser] = useState()
    const currentUser = parseInt(localStorage.getItem("nterior_user"))
    const history = useHistory()

    const fetchMessages = () => {
        fetch("http://localhost:8088/messages?_expand=user")
            .then(res => res.json())
            .then((message) => {
                getMessages(message)
            }
            )
    }

    useEffect(
        () => {
            fetchMessages()
        }, []
    )

    const deleteMessage = (id) => {
        fetch(`http://localhost:8088/messages/${id}`, {
            method: "DELETE"
        })
            .then(
                () => {
                    fetchMessages()
                }
            )
    }

    const getCurrentUser = () => {
        return fetch(`http://localhost:8088/users?id=${currentUser}`)
            .then(res => res.json())
            .then(response => {
                setUser(response[0])
            })
    }

    useEffect(() => {
        getCurrentUser()
    }, [])

    return (
        <>
            <div>
                <button onClick={() => history.push("/messages/create")}>Send A New Message</button>
            </div>

            {messages.map(
                (messageObj) => {
                    if (user?.id === messageObj.userId && messageObj.read === false) {
                        return <ul key={`message--${messageObj.id}`}>{messageObj.messageText} From: {messageObj.user.name}
                            <button onClick={() => { deleteMessage(messageObj.id) }}>Delete</button></ul>
                    }

                }

            )}

        </>
    )

}