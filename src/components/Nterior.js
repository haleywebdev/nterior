import React, { useEffect, useState } from "react"

export const Nterior = () => {
    const [users, assignUsers] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/users")
                .then(res => res.json())
                .then((usersArray) => {
                    assignUsers(usersArray)
                }
                )
        },
        []
    )

    return (
        <>
            <h1>Nterior</h1>
            <h3>Designer's List</h3>
            {
                users.map(
                    (userObj) => {
                        if (userObj.designer === true) {
                            return <ul>{userObj.name}</ul>
                        }

                    })
            }
        </>
    )
}
