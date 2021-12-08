import React from "react"
import { Link } from "react-router-dom"
import { MenuItems } from "./MenuItems"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
    
    <><li className="navbar__item active">
        <Link className="navbar_link" to="/homepage"><img src="https://i.imgur.com/nuAVWfl.png" width="58" height="58"></img></Link>
    </li><li className="navbar__item active">
            <Link className="navbar__link" to="/styles">Styles</Link>
        </li><li className="navbar__item active">
            <Link className="navbar__link" to="/designRequests">Requests</Link>
        </li><li className="navbar__item active">
            <Link className="navbar__link" to="/portfolio">My Portfolio</Link>
        </li><li className="navbar__item active">
            <Link className="navbar__link" to="/messages">

                <div class="notification__count">0 messages</div>
            </Link>
        </li><li className="navbar__item active">
            <Link className="navbar__link" to="#"
                onClick={() => {
                    localStorage.removeItem("nterior_user")
                }}>
                Logout
            </Link>
        </li></>
        )
}

// state = { clicked: false }

//     handleClick = () => {
//         this.setState({ clicked: !this.state.clicked })
//     }


//     redner() {
//         return (
//             <nav className="NavBarItems">
//                 <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
//                 <div className="menu-icon" onClick={this.handleClick}>
//                     <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
//                 </div>

//                 <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}> {MenuItems.map((item, index) => {
//                     return (
//                         <li key={index}>
//                             <a className={item.cName} href={item.url}>

//                                 {item.title}

//                             </a>
//                         </li>
//                     )
//                 })}
//                 </ul>

//             </nav>
//         )
//     }

