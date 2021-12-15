import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Nterior } from "./components/Nterior.js"
import "./index.css"

// rendering our Nterior component, which is our main component
// 

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Nterior />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
)
