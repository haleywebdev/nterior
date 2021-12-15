// the purpose of this module is to return a list of designers and details about the designers

// useEffect is a hook 
// it takes two arguments, first a function and the second an array
// the array is a dependency array
// useEffect runs code when certain state changes
// it is like an event listener

// by invoking a fetch call to get the data from the API,
// fetch grabs the data and promises to tell us when it is done
// the fetch URL starts out as a JSON encoded string 
// I used a query string parameter "user" to access properties that are in another resource
// then, once the promise is finished, the JSON encoded string is parsed to javascript
// then, this response is set to designers using the getDesigners function

// in the devtools, in network tab, the request was successful.

// useState is a hook
// the initial state is an empty array 
// the first parameter, designers, is our state
// the second parameter, getDesigners, is the function used to modify state


import React, { useEffect, useState } from "react"

export const DesignerList = () => {
    const [designers, getDesigners] = useState([])


    useEffect(
        () => {
            fetch("http://localhost:8088/designers?_expand=user")
                .then(res => res.json())
                .then((des) => {
                    getDesigners(des)
                }
                )
        }, [] // dependency array is empty because we only want it to run the first time
    )

    return (
        <> {/* the fragment puts all the elements as children in to a single JSX element */}
            {
                designers.map(
                    (d) => {
                        if (d.user.designer === true) {
                            return <div key={`d--${d.id}`}><b>{d.user.name}</b>
                                <div>Experience: {d.experience}</div>
                                <div>Availability: {d.availability.toString()}</div>
                            </div>
                        }
                    })}
        </>
    )
}

// ARRAY methods: 
// using .map to convert the designer objects to an array in html 
// toString converts my boolean "availability" to a string.

// if conditional 
// to determine whether the designer property on the users array 
// is strictly equal to true in order to return only the users who are designers.