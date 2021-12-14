import React, { useEffect, useState } from "react"

export const MessageList = () => {
    const [messages, getMessages] = useState([])

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

    return (
        

        {
            messages.map(
                (messageObj) => {
                    if (users?.id === messageObj.userId) {
                        return <ul key={`message--${messageObj.id}`}>{messageObj.messageText} From: {messageObj.user.name}
                            <button onClick={() => { deleteMessage(messageObj.id) }}>Delete</button></ul>
                    }

                }

            )
        }



    )
}

