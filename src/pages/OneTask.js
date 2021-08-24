import React from "react"

import Nav from "../components/Nav"

const OneTask = (props) => {



    console.log('tasks state-', props.tasks)
    console.log('props.match.params.id -', props.match.params.id)

//    const id = props.tasks.filter(id => id === props.match.params.id)

    return (
        <div>
            <Nav/>
            "individual Task Page"
        </div>
    )
}

// /task/${item._id}
// props.match.params.id 

export default OneTask