import React from 'react'
import AddEdit from './AddEdit'
import AllTasks from './AllTasks'
import SingleTask from './SingleTask'


const Homepage = (props) => {
    return (
        <div>
            <h1>Homepage</h1>
            <div><AddEdit /></div>
            <div><AllTasks /></div>
            <div><SingleTask /></div>
        </div>
    )
}

export default Homepage