import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"

export const Style = () => {
    const [styles, getStyle] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch(`http://localhost:8088/styles`)
                .then(res => res.json())
                .then((data) => {
                    getStyle(data)
                })
        },
        []
    )

    useEffect(
        () => {
            fetch(`http://localhost:8088/posts`)
        }
    )

    return (
        <>

            <h2>Styles</h2>

            <div>
                <button onClick={() => history.push("/posts/create")}>Add A New Post</button>
            </div>

            {styles.map(style => {
                return <ul key={`style--${style.id}`}><Link to={`/posts/${style.id}`}>{style.style}</Link></ul>
            })
            }
            


        </>
    )
}

