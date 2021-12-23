
import React, { useEffect, useState } from "react"

// this component renders the list of designers on the homepage 

export const DesignerList = () => {
    const [designers, setDesigners] = useState([]) // useState returns an initial state variable (designer) and a function that 
    // runs it or updates it 

    useEffect(
        () => {
            fetch("http://localhost:8088/designers?_expand=user")
                .then(res => res.json())
                .then((des) => {
                    setDesigners(des)
                }
                )
        }, []
    ) // this use effect is fetching an augmented API url, then converts the string to javascript, then stores it in the 
    // state function we use to run it 

    return (
        <>
            {
                designers.map(
                    (d) => {

                        return <div key={`d--${d.id}`}><b>{d.user.name}</b>
                            <div>Experience: {d.experience}</div>
                            <div>Availability: {d.availability.toString()}</div>
                        </div>

                    })}
        </>
    )
}