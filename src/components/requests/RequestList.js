import React, { useEffect, useState } from "react"

export const RequestList = () => {
    const [designRequests, setDesignRequests] = useState([])

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

            {
                designRequests.map(
                    (designRequestObj) => {

                        return <ul key={`request--${designRequestObj.id}`}>{designRequestObj.description}</ul>
                    }

                )
            }
        </>
    )
}
