import React, { useEffect, useState } from "react"

export const CustomerList = () => {
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

            {
                users.map(
                    (userObj) => {
                        if (userObj.designer === false) {
                            return <ul>{userObj.name}</ul>
                        }

                    })
            }
        </>
    )
}
