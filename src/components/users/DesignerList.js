import React, { useEffect, useState } from "react"

export const DesignerList = () => {
    const [users, setUsers] = useState([])
    const [totalDesignerMessage, updateMessage] = useState("")

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

    useEffect(
        () => {
            if (users.designer === true && users.length === 1) {
                updateMessage("You have 1 designer")
            } else {
                updateMessage(`You have ${users.length} designers.`)
            }
        },
        [users]
    )

    return (
        <><div>{totalDesignerMessage}</div>
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
