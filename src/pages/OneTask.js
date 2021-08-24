import React from "react"

import Nav from "../components/Nav"

const OneTask = (props) => {



    // console.log('tasks state-', props.tasks)
    // console.log('props.match.params.id -', props.match.params.id)

   const match = props.tasks.filter(el => el._id === props.match.params.id)
    // console.log('match-', match)
    
    const loaded = () => {
    return (
        match.map((item, index) => (
        <div>
            <Nav/>
            <h1>{item.name}</h1>
            <small>Affirmation</small>
            <div>{item.lastDone}</div>
            <div>{item.frequency}</div>
            <div>{item.checklist}</div>
        </div>
        )))
    }

    const loading = () => {
        return (<div>Loading ...</div>)
    }

    return match.length > 0 ? loaded() : loading()
}


export default OneTask

