import React from "react"
import { Link } from "react-router-dom"

const Nav = (props) => {
    return (
        <div>
            <Link to="/mylist">My List</Link>
            <Link to="/task/:id">One Thing</Link>            
            <Link to="/newtask">New Task</Link>
            <Link to="/logout">Logout</Link>
        </div>
    )
}

export default Nav