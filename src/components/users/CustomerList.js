import React, { useEffect, useState } from "react"

export const CustomerList = () => {
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
                        if (userObj.designer === false) {
                            return <ul key={`user--${userObj.id}`}>{userObj.name}</ul>
                        }

                    })
            }
        </>
    )
}
