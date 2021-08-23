import React from 'react'
import AddEdit from './AddEdit'
import AllTasks from './AllTasks'
import SingleTask from './SingleTask'
import { Link } from 'react-router-dom'


const Homepage = (props) => {
    return (
        <div>
            <h1>Homepage</h1>
            <Link to="/edit/:id"><button>Add/Edit Tasks</button></Link>
            <Link to="/mylist"><button>Task List</button></Link>
            <Link></Link>
        </div>
    )
}

export default Homepage