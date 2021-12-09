import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min"

export const StyleList = () => {
    const [styles, getStyles] = useState([])
    const [posts, getPosts] = useState([])
    const [chosenStyle, setChosenStyle] = useState(0)
    const { styleId } = useParams()
    const history = useHistory()

    const chooseStyles = (evt) => {
        evt.preventDefault()
        const newStyle = {
            
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newStyle)
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
            fetch("http://localhost:8088/styles")
                .then(res => res.json())
                .then((stylesArray) => {
                    getStyles(stylesArray)
                }
                )
        },
        []
    )

    useEffect(
        () => {
            fetch(`http://localhost:8088/posts?_expand=style&styleId=${styleId}`)
                .then((styleImagesArray) => {
                    getPosts(styleImagesArray)
                })
        },
        [styleId]
    )

    return (
        <>

            {
                styles.map(
                    (styleObj) => {
                        return <fieldset><div key={`style--${styleObj.id}`}>{styleObj.style}
                            <input
                                onChange={(evt) => {

                                    setChosenStyle(styleObj.id)
                                }}
                                type="radio"
                                name="Product" />
                        </div>
                        </fieldset>

                    }

                )
            }
        </>
    )
}
