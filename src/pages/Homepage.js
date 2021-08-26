import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/home.scss'

import Logo from '../components/Logo'
import Affirm from "../components/Affirm"

const Homepage = (props) => {

    const topId = props?.tasks[0]?._id

    return (
        <div className="home flex-container">
            <Logo lo="homeLogo"/> 
            <h1>Make <span>#adulting</span> easier!</h1>
            <div className="homeButtonContainer">
                <Link to="/new"><button className="addTasksButton">Add a New Task</button></Link>
                <Link to="/mylist"><button className="taskListButton">Your Task List</button></Link>
                <Link to={`task/${topId}`} ><button className="oneTaskButton">If you only have time for one thing...</button></Link>
            </div>
            <Affirm />
        </div>
    )
}

export default Homepage