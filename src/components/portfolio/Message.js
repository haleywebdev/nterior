import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const Message = () => {
    const [messages, getMessages] = useState([])
    const [user, setUser] = useState()
    const [designer, setDesigner] = useState()
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


    //re-renders the page after a message has been deleted

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
                fetch(`http://localhost:8088/designers?userId=${currentUser}`)
                    .then(res => res.json())
                    .then(res => {
                        setDesigner(res[0])
                    })
            })
    }

    useEffect(() => {
        getCurrentUser()
    }, [])


    return (
        <>

            {/* the button on click will send the uder to the form to create a message */}

            <div>
                <button onClick={() => history.push("/messages/create")}>Send A New Message</button>
            </div>

            {/* iterating through messages array, whose value is an array of message objects given by the getMessages function. 
            if the id of the logged in user is striclty equal to the userId on the message object, 
            and if the message object 'read' property is false, 
            return the message object to the dom.

            the delete button will render the delete message function on click */}

            {
                user?.designer ?

                    <div><h4>Messages Sent</h4>
                        {messages.map(
                            (messageObj) => {
                                if (user.id === messageObj.userId && messageObj.read === false) {
                                    return <ul key={`message--${messageObj.id}`}>{messageObj.messageText} From: {messageObj.user.name}
                                        <button onClick={() => { deleteMessage(messageObj.id) }}>Delete</button></ul>
                                }

                            }

                        )}

                        <h4>Messages Received</h4>
                        {messages.map(
                            (messageObj) => {
                                if (user.id === messageObj.designerId && messageObj.read === false) {
                                    return <ul key={`message--${messageObj.id}`}>{messageObj.messageText} From: {messageObj.user?.name}
                                        <button onClick={() => { deleteMessage(messageObj.id) }}>Delete</button></ul>

                                }
                            }
                        )}

                    </div>

                    :

                    <div><h4>Messages Sent</h4>{messages.map(
                        (messageObj) => {
                            if (user?.id === messageObj.userId && messageObj.read === false) {
                                return <ul key={`message--${messageObj.id}`}>{messageObj.messageText} From: {messageObj.user.name}
                                    <button onClick={() => { deleteMessage(messageObj.id) }}>Delete</button></ul>
                            }

                        }

                    )}

                        <h4>Messages Received</h4>
                        {messages.map(
                            (messageObj) => {
                                if (user?.id === messageObj.designerId && messageObj.read === false) {
                                    return <ul key={`message--${messageObj.id}`}>{messageObj.messageText} From: {messageObj.user?.name}
                                        <button onClick={() => { deleteMessage(messageObj.id) }}>Delete</button></ul>

                                }
                            }
                        )}

                    </div>
            }

        </>
    )

}
