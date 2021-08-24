import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import '../styles/home.scss'




const Homepage = (props) => {
    return (
        <div className="home">
            <Logo lo="homeLogo"/> 
            <h1>Make <span>#adulting</span> easier!</h1>
            <div className="homeButtonContainer">
            <Link to="/new"><button className="addTasksButton">Add a New Task</button></Link>
            <Link to="/mylist"><button className="taskListButton">Your Task List</button></Link>
            <Link to="task/:id"><button className="oneTaskButton">If you only have time for one thing...</button></Link>
            </div>
    </div>
    )
}

export default Homepage