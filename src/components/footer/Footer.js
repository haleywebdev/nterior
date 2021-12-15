import React from "react"
import { Link } from "react-router-dom"
import "./Footer.css"

export const Footer = (props) => {
    
    return (
        <div className="footer">

            <div className="footer__item">© Nterior Design, a Nashville based interior design firm.</div>

            <div className="footer__item">
                <Link className="navbar__link" to="/hiring">Join Our Firm!</Link>
            </div>


        </div>
    )
}
