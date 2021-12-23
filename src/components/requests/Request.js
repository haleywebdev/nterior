import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

// this component renders the link to the request form

export const Request = () => {

    const history = useHistory()

    return (
        <>
<div>
                <button onClick={() => history.push("/designRequests")}>Request A Design!</button>
            </div>
        </>
    )
}
