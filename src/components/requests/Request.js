import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { getAllTickets } from "../ApiManager"

export const Ticket = () => {
    const [request, completeRequest] = useState({})  // State variable for current ticket object
    const { requestId } = useParams()  // Variable storing the route parameter
    const history = useHistory()


    // Fetch the individual ticket when the ticketId route parameter value changes
    useEffect(
        () => {
            return fetch(`http://localhost:8088/designRequests/${requestId}`)
                .then(response => response.json())
                .then((data) => {
                    completeRequest(data)
                })

        },
        [requestId]
    )

    const getAllRequests = () => {
        return fetch("http://localhost:8088/designRequests")
            .then(res => res.json())
    }

    const completeRequest = (evt) => {

        const updatedRequest = {
            userId: parseInt(localStorage.getItem("nterior_user")),
            designerId: parseInt(evt.target.value),
            styleId: parseInt(evt.target.value),
            room: request.room,
            windows: request.windows,
            doors: request.doors,
            dimensions: request.dimensions,
            description: request.description,
            completed: true
        }
        fetch(`http://localhost:8088/completeRequests/${requestId}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(updatedRequest)
        })
            .then(() => {
                history.push("/designRequests")
            })
    }

    return (
        <>
            <h2>Ticket Details</h2>
            <section className="ticket">
                <h3 className="ticket__description">{ticket.description}</h3>
                <div className="ticket__customer">Submitted by {ticket.customer?.name}</div>
                <div className="ticket__employee">Assigned to
                    <select id="employee"
                        value={ticket.employeeId}
                        onChange={assignEmployee}>
                        {
                            employees.map(e => <option key={`employee--${e.id}`} value={e.id}>{e.name}</option>)
                        }
                    </select>
                </div>
            </section>
        </>
    )
}
