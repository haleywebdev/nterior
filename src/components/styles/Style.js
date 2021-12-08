import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom"

export const Style = () => {

    const [styles, getStyle] = useState([])

    const { styleId } = useParams()  // Variable storing the route parameter

    const history = useHistory() // We can access and manipulate the current state of the browser history.
    // We can use this object to redirect the user to another page by calling history.push('/example-route')
    // history is a "prop" used to move from the current page to another one.


    // Fetch the individual location when the productLocationId route parameter value changes


    // Fetch all locations
    useEffect(
        () => {
            fetch(`http://localhost:8088/styles`)
                .then(res => res.json()) // converting JSON to JS data structure
                .then((data) => {
                    getStyle(data)
                })
        },
        []  // Empty dependency array only reacts to JSX initial rendering.
    )

    useEffect(
        () => {
            fetch(`http://localhost:8088/posts`)
    
        }
    )

    // Function to invoke when a <link> customer is chosen from the list of current orders
    
    return (
        <>
            
                <div>
                    <h2>Styles</h2> 

                    <div>
                <button onClick={() => history.push("/posts/create")}>Add A New Post</button>
            </div>

                    {
                        styles.map(style => {
                            return <ul key={`style--${style.id}`}><Link to={`/posts/${style.id}`}>{style.style}</Link></ul>


                        })}


                </div>
            


        </>
    )
}

