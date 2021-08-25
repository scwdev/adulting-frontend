import React from "react"
import { Link } from "react-router-dom"
import "../styles/nav.scss"

const Nav = (props) => {

    const topId = props?.tasks[0]?._id

    return (
        <div className="nav">
            <Link className="anav" to="/mylist">My Task List</Link>
            <Link className="anav" to={`/task/${topId}`}>One Thing</Link>            
            <Link className="anav" to="/new">New Task</Link>
            <Link className="anav" to="/logout">Logout</Link>
        </div>
    )
}

export default Nav