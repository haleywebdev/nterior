import React from "react"
import { DesignerList } from "../designers/DesignerList"
import { RequestList } from "../requests/RequestList"

export const Homepage = () => {
    return (
        <>
            <ul>We are a full service firm based in Nashville, Tennessee.</ul>
            <ul>We'll lead the way through the design inception, space planning, furnishing and fixture selection, construction and installation.</ul>
            <ul>Each project is a culmination of carefully chosen details.</ul><h3>Meet Our Designers</h3>
            <DesignerList />
            <RequestList />
        </>

    )
}