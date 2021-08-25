import React from "react"
import { Link } from "react-router-dom"
import "../styles/nav.scss"

const Nav = (props) => {

    const topId = props?.tasks[0]?._id

    return (
        <div className="nav">
            <Link to="/mylist"><span>My Task List</span></Link>
            <Link to={`/task/${topId}`}><span>One Thing</span></Link>            
            <Link to="/new"><span>New Task</span></Link>
            <Link to="/logout"><span>Logout</span></Link>
        </div>
    )
}

export default Nav