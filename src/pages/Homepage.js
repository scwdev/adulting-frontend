import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/home.scss'

import Logo from '../components/Logo'
import Lightbulb from "../components/Lightbulb"
import Affirm from "../components/Affirm"

const Homepage = (props) => {

    const topId = props?.tasks[0]?._id

    return (
        <div className="home flex-container">
            <Lightbulb lo="homeLogo"/>
            <div className="homeButtonContainer">
                <Link to={`task/${topId}`} ><button className="oneTaskButton">If you only have time for one thing...</button></Link>
                <Link to="/mylist"><button className="taskListButton">Your Task List</button></Link>
                <Link to="/new"><button className="addTasksButton"><span className="iconify" data-icon="fa:thumb-tack"></span>
Add a New Task</button></Link>
            </div>
            <Affirm />
        </div>
    )
}

export default Homepage