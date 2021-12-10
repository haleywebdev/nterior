import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const StylePostForm = () => {

    const [post, updatePost] = useState({
        styleId: 0,
        imageURL: ""
    })
    const [styles, defineStyles] = useState([])

    const history = useHistory()

    const submitForm = (evt) => {
        evt.preventDefault()
        const newForm = {
            styleId: post.styleId,
            imageURL: post.imageURL
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newForm)
        }

        return fetch("http://localhost:8088/posts", fetchOption)
            .then(() => {
                history.push("/posts")
            })
    }

    useEffect(
        () => {
            fetch(`http://localhost:8088/styles`)
                .then(res => res.json())
                .then((data) => {
                    defineStyles(data)
                })
        },
        []
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
                                    copy.styleId = parseInt(evt.target.value)
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
