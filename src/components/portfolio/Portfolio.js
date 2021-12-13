import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min"

export const Portfolio = () => {
    const [designRequests, setDesignRequests] = useState([])
    const [favorites, setFavorites] = useState([])
    const [posts, getPosts] = useState([])
    const [messages, setMessages] = useState([])
    const [users, setUsers] = useState()
    const currentUser = parseInt(localStorage.getItem("nterior_user"))
    const history = useHistory()
    const { postId } = useParams()

    useEffect(
        () => {
            fetch("http://localhost:8088/designRequests")
                .then(res => res.json())
                .then((designRequestsArray) => {
                    setDesignRequests(designRequestsArray)
                }
                )
        }, []
    )

    useEffect(
        () => {
            fetch("http://localhost:8088/favorites")
                .then(res => res.json())
                .then((fave) => {
                    setFavorites(fave)
                }
                )
        }, []
    )

    useEffect(
        () => {
            fetch("http://localhost:8088/messages")
                .then(res => res.json())
                .then((message) => {
                    setMessages(message)
                }
                )
        }, []
    )

    useEffect(
        () => {
            fetch(`http://localhost:8088/favorites?_expand=post&postId=${postId}`)
                .then((styleImagesArray) => {
                    getPosts(styleImagesArray)
                })
        },
        [postId]
    )

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

                                return <ul key={`request--${designRequestObj.id}`}>{designRequestObj.description}</ul>
                            }

                        )}</div>

                        <div><h3>Completed Requests</h3></div>

                        <div><h3>My Messages</h3>
                            <div>
                                <button onClick={() => history.push("/messages/create")}>Send A New Message</button>
                            </div>

                            {messages.map(
                                (messageObj) => {
                                    return <><div key={`message--${messageObj.id}`}>{messageObj.messageText}</div><button>Delete</button></>
                                }
                            )}

                        </div></>
                    :

                    <>
                        <div><h3>My Requests</h3>
                            {designRequests.map(
                                (designRequestObj) => {

                                    return <ul key={`request--${designRequestObj.id}`}>{designRequestObj.description}</ul>
                                }

                            )}</div><div><h3>My Favorites</h3>

                            {favorites.map(
                                (favoriteObj) => {
                                    return <img src={favoriteObj.post?.imageURL} alt="" />
                                }
                            )}

                        </div><div><h3>My Messages</h3>
                            <div>
                                <button onClick={() => history.push("/messages/create")}>Send A New Message</button>
                            </div>

                            {messages.map(
                                (messageObj) => {
                                    return <><div key={`message--${messageObj.id}`}>{messageObj.messageText}</div><button>Delete</button></>
                                }
                            )}

                        </div></>
            }
        </>
    )
}
