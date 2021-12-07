import React, { useEffect, useState } from "react"

export const StyleList = () => {
    const [styles, setStyles] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/styles")
                .then(res => res.json())
                .then((stylesArray) => {
                    setStyles(stylesArray)
                }
                )
        },
        []
    )

    return (
        <>

            {
                styles.map(
                    (styleObj) => {
                            return <ul>{styleObj.style}</ul>
                        }

                    )
            }
        </>
    )
}
