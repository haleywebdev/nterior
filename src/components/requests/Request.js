import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

// this component renders the link to the request form

export const Request = () => {
    const [designRequests, setDesignRequests] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/designRequests")
                .then(res => res.json())
                .then((designRequestsArray) => {
                    setDesignRequests(designRequestsArray)
                }
                )
        },
        []
    )

    return (
        <>
<div>
                <button onClick={() => history.push("/designRequests")}>Request A Design!</button>
            </div>
        </>
    )
}
