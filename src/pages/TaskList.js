import React from "react"
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import "../styles/tasklist.scss"

import Nav from "../components/Nav"
import Button from "../components/Button"

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
                    <Button className="done-button" handleClick={() => {resetTimer(item)}} text="Done!" />
                    <Button className="delete-button" handleClick={() => {props.handleDelete(item)}} text="Delete :(" />
                </li>                
            ))
        )
    }

    return (
        <div className="taskListContainer">
            <Logo lo="taskListLogo"/>
            <Nav nav="taskListNav" tasks={props.tasks}/>
            <ul>
                {Array.isArray(tasks) === true ? loaded() : loading()}
            </ul>
        </div>
    )
}

export default TaskList