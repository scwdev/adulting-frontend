import React from "react"
import { Link } from "react-router-dom"


const Nav = (props) => {
    return (
        <div className={props.nav}>
            <Link to="/mylist">My Task List</Link>
            <Link to="/task/:id">One Thing</Link>            
            <Link to="/new">New Task</Link>
            <Link to="/logout">Logout</Link>
        </div>
    )
}

export default Nav