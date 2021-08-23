import React from "react"
import { Link } from "react-router-dom"
import Logo from './Logo'

const Nav = (props) => {
    return (
        <div>
            <Logo />
            <Link to="/mylist">My List</Link>
            <Link to="/task/:id">One Thing</Link>            
            <Link to="/newtask">New Task</Link>
            <Link to="/logout">Logout</Link>
        </div>
    )
}

export default Nav