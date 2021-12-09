import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const StylePostForm = () => {

    const [post, updatePost] = useState({
        imageURL: ""
    })
    const [styles, defineStyles] = useState([])

    const history = useHistory()

    // this is the object we want to send to the api

    const submitForm = (evt) => {
        evt.preventDefault()
        const newForm = {
            styleId: post.style,
            imageURL: post.imageURL
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newForm)
        }

        // when something new has been created in the API, we want to send the user immediately back to the service tickets to see what has been added to the list.
        // we use the history mechanism to programatically change it! 

        return fetch("http://localhost:8088/posts", fetchOption)
            .then(() => {
                history.push("/posts")
            })
    }

    useEffect(
        () => {
            fetch(`http://localhost:8088/styles`)
                .then(res => res.json()) // converting JSON to JS data structure
                .then((data) => {
                    defineStyles(data)
                })
        },
        []  // Empty dependency array only reacts to JSX initial rendering.
    )

    return (
        <>
            <form className="hireForm">
                <h2 className="hireForm__title">Add A New Post</h2>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="location">Style: </label>
                        <select  onChange={
                                (evt) => {
                                    const copy = { ...post }
                                    copy.style = evt.target.value
                                    updatePost(copy)
                                }
                            }
                        >
                            <option value="0">Choose A Style...</option>
                            {styles.map(s => (
                            <option key={s.id} value={s.id}>
                                {s.style}
                                </option> ))}
                        </select>
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Image URL: </label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = { ...post }
                                    copy.imageURL = evt.target.value
                                    updatePost(copy)
                                }
                            }
                            required autoFocus
                            type="url"
                            className="form-control"
                        />
                    </div>
                </fieldset>

                <button className="btn btn-primary" onClick={submitForm}>
                    Submit Your Post
                </button>

            </form>
        </>
    )
}
