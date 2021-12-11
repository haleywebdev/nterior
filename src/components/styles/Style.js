import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"

export const Style = () => {
    const [styles, getStyle] = useState([])
    const [users, setUsers] = useState()
    const currentUser = parseInt(localStorage.getItem("nterior_user"))
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

    const getCurrentUser = () => {
        return fetch(`http://localhost:8088/users?id=${currentUser}`)
            .then(res => res.json())
            .then(response => setUsers(response[0]))

    }

    useEffect(() => {
        getCurrentUser()
    }, [])

    return (
        <><h2>Styles</h2>
            {
                users?.designer
                    ?

                    <div>
                        <button onClick={() => history.push("/posts/create")}>Add A New Post</button>
                    </div> :


                    styles.map(style => {
                        return <ul key={`style--${style.id}`}><Link to={`/posts/${style.id}`}>{style.style}</Link></ul>
                    })

            }



        </>
    )
}

