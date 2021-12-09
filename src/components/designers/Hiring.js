import React from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"

export const Hire = () => {

    const history = useHistory()

    return (
        <>

            <div>
                <h2>Join Our Firm!</h2>
                <p>In order to submit an application, <Link to={`/register`}>please create an account.</Link></p>

                <div>
                    <button onClick={() => history.push("/hiring/create")}>New Hire Application</button>
                </div>




            </div>



        </>
    )
}
