import React, { useEffect, useState } from "react"
import { DesignerList } from "../designers/DesignerList"

export const Homepage = () => {
    return (
    <><>
            {/* <img src="https://i.imgur.com/awNT8TA.png" /> */}
            {/* <img src ="https://i.imgur.com/beuCWlt.png"/> */}
            <img src="https://i.imgur.com/xmZimMU.png" />
            <ul>We are a full service firm based in Nashville, Tennessee.</ul>
            <ul>We'll lead the way through the design inception, space planning, furnishing and fixture selection, construction and installation.</ul>
            <ul>Each project is a culmination of carefully chosen details.</ul>
        </><h3>Meet Our Designers</h3><DesignerList />
        </>
        )
}