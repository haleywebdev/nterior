import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const RequestList = () => {
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
                <button onClick={() => history.push("/designRequests/create")}>Request A Design!</button>
            </div>
        </>
    )
}
