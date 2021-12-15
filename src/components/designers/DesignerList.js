
import React, { useEffect, useState } from "react"

export const DesignerList = () => {
    const [designer, getDesigner] = useState([])


    useEffect(
        () => {
            fetch("http://localhost:8088/designers?_expand=user")
                .then(res => res.json())
                .then((des) => {
                    getDesigner(des)
                }
                )
        }, []
    )

    return (
        <>
            {
                designer.map(
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