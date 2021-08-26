import React from "react"
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import "../styles/tasklist.scss"

import Nav from "../components/Nav"
import Button from "../components/Button"
import Affirm from "../components/Affirm"
import ProgBar from "../components/ProgBar"
import Lightbulb from "../components/Lightbulb"

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
                    <div className="task-li">
                        <Link className="task-link" to={`/task/${item._id}`}>
                            {item.name}
                        </Link>
                    </div>
                    <div><Button className="done-button" handleClick={() => {resetTimer(item)}} text="Done!" /></div>
                    <ProgBar task={item} width="16" height=".5"/>
                </li> 
            ))

        )
    }

    return (
        <div className="taskListContainer flex-container">
            <Lightbulb lightbulb="taskListLogo"/>
            <Nav tasks={props.tasks}/>
            <h2>Task List </h2>
            <ul>
                {Array.isArray(tasks) === true ? loaded() : loading()}
            </ul>
            <Affirm />
        </div>
    )
}

export default TaskList