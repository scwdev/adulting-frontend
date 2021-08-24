import React from "react"
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import "../styles/tasklist.scss"

import Nav from "../components/Nav"

import { prioritySort } from "../functions/prioritySort"

const TaskList = (props) => {

    const tasks = props.tasks

    const loading = () => ("loading...")
    const loaded = () => {
        const resetTimer = (input) => {
            input = {...input, lastDone: Date.now()}
            props.handleUpdate(input)
        }
        return (
            tasks.map((item,index) => (
                <li>
                    <Link to={`/task/${item._id}`}>{item.name}</Link>
                    <button onClick={() => {resetTimer(item)}}>Did it!</button>
                </li>                
            ))
        )
    }

    return (
        <div className="taskListContainer">
            <Logo lo="taskListLogo"/>
            <Nav nav="taskListNav"/>
            <ul>
                {Array.isArray(tasks) === true ? loaded() : loading()}
            </ul>
        </div>
    )
}

export default TaskList