import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min"
import { Link } from "react-router-dom"

export const Portfolio = () => {
    const [designRequests, getDesignRequests] = useState([])
    const [favorites, getFavorites] = useState([])
    const [messages, getMessages] = useState([])
    const [users, setUsers] = useState()
    const currentUser = parseInt(localStorage.getItem("nterior_user"))
    const history = useHistory()
    const { requestId } = useParams()

    const fetchRequests = () => {
        fetch(`http://localhost:8088/designRequests?_expand=user`)
            .then(res => res.json())
            .then((request) => {
                getDesignRequests(request)
            }
            )
    }

    useEffect(
        () => {
            fetchRequests()
        }, []
    )

    const fetchFavorites = () => {
        return fetch(`http://localhost:8088/favorites?_expand=user&_expand=post`)
            .then(res => res.json())
            .then((favorite) => {
                getFavorites(favorite)
            })
    }

    useEffect(
        () => {
            fetchFavorites()
        },
        []
    )

    const deleteFavorite = (id) => {
        fetch(`http://localhost:8088/favorites/${id}`, {
            method: "DELETE"
        })
            .then(
                () => {
                    fetchFavorites()
                }
            )
    }

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
            .then(response => setUsers(response[0]))
    }

    useEffect(() => {
        getCurrentUser()
    }, [])


    return (
        <> <h1>My Portfolio</h1>

            {
                users?.designer ?

                    <><div><h3>Pending Requests</h3>
                        {designRequests.map(
                            (designRequestObj) => {
                                if (users?.id === designRequestObj.userId && designRequestObj.completed === false) {
                                    return <ul key={`request--${designRequestObj.id}`}><Link to={`/designRequests/${designRequestObj.id}`}>{designRequestObj.description}</Link></ul>
                                }
                            }

                        )}</div>

                        <div><h3>Completed Requests</h3>

                            {designRequests.map(
                                (designRequestObj) => {
                                    if (users?.id === designRequestObj.userId && designRequestObj.completed === true) {
                                        return <ul key={`request--${designRequestObj.id}`}><Link to={`/designRequests/${designRequestObj.id}`}>{designRequestObj.description}</Link></ul>
                                    }
                                }

                            )}

                        </div>

                        <div><h3>My Messages</h3>
                            <div>
                                <button onClick={() => history.push("/messages/create")}>Send A New Message</button>
                            </div>

                            <h4>Unread Messages</h4>

                            {messages.map(
                                (messageObj) => {
                                    if (users?.id === messageObj.userId && messageObj.read === false) {
                                        return <ul key={`message--${messageObj.id}`}>{messageObj.messageText} From: {messageObj.user.name}
                                            <button onClick={() => { deleteMessage(messageObj.id) }}>Delete</button></ul>
                                    }

                                }

                            )}

                            <h4>Read Messages</h4>

                            {messages.map(
                                (messageObj) => {
                                    if (users?.id === messageObj.userId && messageObj.read === true) {
                                        return <ul key={`message--${messageObj.id}`}>{messageObj.messageText} From: {messageObj.user.name}
                                            <button onClick={() => { deleteMessage(messageObj.id) }}>Delete</button></ul>
                                    }

                                }

                            )}

                        </div></>
                    :

                    <>
                        <div><h3>My Requests</h3>
                            {designRequests.map(
                                (designRequestObj) => {
                                    if (users?.id === designRequestObj.userId) {
                                        return <ul key={`request--${designRequestObj.id}`}><Link to={`/designRequests/${designRequestObj.id}`}>{designRequestObj.description}</Link>
                                        </ul>
                                    }
                                }

                            )}</div>

                        <div><h3>My Favorites</h3>

                            <div className="container">{favorites.map(
                                (favoriteObj) => {
                                    if (users?.id === favoriteObj.userId) {
                                        return <><img src={favoriteObj.post?.imageURL} width="200" height="auto" alt="" />
                                            <button onClick={() => { deleteFavorite(favoriteObj.id) }}>Delete</button></>
                                    }

                                }

                            )}</div>

                        </div><div><h3>My Messages</h3>
                            <div>
                                <button onClick={() => history.push("/messages/create")}>Send A New Message</button>
                            </div>

                            {messages.map(
                                (messageObj) => {
                                    if (users?.id === messageObj.userId) {
                                        return <ul key={`message--${messageObj.id}`}>{messageObj.messageText} From: {messageObj.user.name}
                                            <button onClick={() => { deleteMessage(messageObj.id) }}>Delete</button></ul>
                                    }

                                }

                            )}

                        </div></>
            }
        </>
    )
}
