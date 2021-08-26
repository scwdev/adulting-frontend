import React from "react"
import { Link } from "react-router-dom"
import "../styles/nav.scss"

const Nav = (props) => {

    const topId = props?.tasks[0]?._id

    return (
        <div className="nav">
            <Link className="nav-link" to="/mylist">My List</Link>
            <Link className="nav-link" to={`/task/${topId}`}>Priority</Link>            
            <Link className="nav-link" to="/new">New Task</Link>
            <Link className="nav-link" to="/logout">Logout</Link>
        </div>
    )
}

export default Nav