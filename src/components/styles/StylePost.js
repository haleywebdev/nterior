import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min"

import "./StylePost.css"

export const StylePost = () => {
    const [posts, set] = useState([])
    const { styleId } = useParams()

    useEffect(
        () => {
            fetch(`http://localhost:8088/posts?_expand=style&styleId=${styleId}`)
                .then(res => res.json())
                .then(set)
        },
        [styleId]
    )

    const history = useHistory()

    const submitFavorite = (evt) => {
        evt.preventDefault()
        const newFavorite = {
            postId: parseInt(evt.target.id),
            userId: parseInt(localStorage.getItem("nterior_user"))
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFavorite)
        }

        return fetch("http://localhost:8088/favorites", fetchOption)
            .then(() => {
                history.push("/favorites")
            })
    }

    return (
        <>
            <div className="image-list">
                {
                    posts.map(
                        (postObj) => {
                            return <div className="container">
                                <img src={postObj.imageURL} alt="images" className="image" />
                                <div className="middle">
                                    <button className="text" id={postObj.id} onClick={submitFavorite}>Favorite</button>
                                </div>
                            </div>

                        }

                    )
                }</div>
        </>
    )
}








