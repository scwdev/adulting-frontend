import React from "react"
import { Link } from "react-router-dom"


const Nav = (props) => {

    const topId = props?.tasks[0]?._id

    return (
        <div className={props.nav}>
            <Link to="/mylist">My Task List</Link>
            <Link to={`/task/${topId}`}>One Thing</Link>            
            <Link to="/new">New Task</Link>
            <Link to="/logout">Logout</Link>
        </div>
    )
}

export default Nav