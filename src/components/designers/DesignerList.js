import React, { useEffect, useState } from "react"

export const DesignerList = () => {
    const [users, setUsers] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/users")
                .then(res => res.json())
                .then((usersArray) => {
                    setUsers(usersArray)
                }
                )
        },
        []
    )

    return (
        <>
            {
                users.map(
                    (userObj) => {
                        if (userObj.designer === true) {
                            return <ul key={`user--${userObj.id}`}>{userObj.name}</ul>
                        }

                    })
            }
        </>
    )
}
