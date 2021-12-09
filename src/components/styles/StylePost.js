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

    const [favorite, updateFavorite] = useState({})
    const history = useHistory()

    const submitFavorite = (evt) => {
        evt.preventDefault()
        const newFavorite = {
            postId: favorite.post,
            userId: parseInt(localStorage.getItem("nterior_user"))
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFavorite)
        }

        // when something new has been created in the API, we want to send the user immediately back to the service tickets to see what has been added to the list.
        // we use the history mechanism to programatically change it! 

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
                                <img key={postObj.id} src={postObj.imageURL} alt="images" className="image" />
                                    <div className="middle"> <button onChange={(evt) => {
                                        const copy = { ...favorite }
                                        copy.post = evt.target.value
                                        updateFavorite(copy)
                                    }} onClick={submitFavorite}>Favorite</button></div>
                                
                            </div>

                        }

                    )
                }</div>
        </>
    )
}








