import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom"

export const Hire = () => {

    const history = useHistory()


    return (
        <>

            <div>
                <h2>Join Our Firm!</h2>

                <div>
                    <button onClick={() => history.push("/hiring/create")}>New Hire Application</button>
                </div>




            </div>



        </>
    )
}
