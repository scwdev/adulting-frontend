import React from 'react'
import { Link } from 'react-router-dom'




const Homepage = (props) => {
    return (
        <div>
            <h1>Homepage</h1>
            <Link to="/edit/:id"><button>Add/Edit Tasks</button></Link>
            <Link to="/mylist"><button>Task List</button></Link>
            <Link to="task/:id"><button>One Task</button></Link>
        </div>
    )
}

export default Homepage