import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"

export const StylePost = () => {
    const [posts, set] = useState([])
      // State variable for current ticket object
    const { styleId } = useParams()  // Variable storing the route parameter


    useEffect(
        () => {
            fetch(`http://localhost:8088/posts?_expand=style&styleId=${styleId}`)
                .then(res => res.json())
                .then(set)
        },
        [styleId]  // Above function runs when the value of ticketId change
    )

    useEffect(
        () => {
            fetch("http:localhost:8088/posts")
        },
        []
    )

    return (
        <>
            {
                posts.map(
                    (postObj) => {
                        return <div key={`postObj--${postObj.style?.id}`}>
                            <img src={postObj.imageURL}  />
                        </div>

                    }

                )
            }
        </>
    )
}










