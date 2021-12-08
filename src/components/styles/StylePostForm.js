import React, { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const StylePostForm = () => {

    const [post, updatePost] = useState({
        styleId: 1,
        imageURL: ""
    })

    const history = useHistory()

    // this is the object we want to send to the api

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

        // when something new has been created in the API, we want to send the user immediately back to the service tickets to see what has been added to the list.
        // we use the history mechanism to programatically change it! 

        return fetch("http://localhost:8088/posts", fetchOption)
            .then(() => {
                history.push("/posts")
            })
    }

    return (
        <>
            <form className="hireForm">
                <h2 className="hireForm__title">Add A New Post</h2>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="location">Style: </label>
                        <select value={post.styleId}
                            onChange={
                                (evt) => {
                                    // you cannot directly modify state. you must make a copy of state using ...
                                    const copy = { ...post }
                                    copy.styleId = evt.target.value
                                    updatePost(copy)
                                }
                            } >
                            <option name="styles">Choose A Style...</option>
                            <option name="modern">Modern</option>
                            <option name="contemporary">Contemporary</option>
                            <option name="mid-century">Mid-Century</option>
                            <option name="art-deco">Art Deco</option>
                            <option name="minimalist">Minimalist</option>
                            <option name="Scandinavian">Scandinavian</option>
                            <option name="Eclectic">Eclectic</option>
                            <option name="Industrial">Industrial</option>
                            <option name="Farmhouse">Farmhouse</option>
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
                            id="hourly"
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
