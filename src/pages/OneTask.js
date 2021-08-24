import React from "react"

import Nav from "../components/Nav"

import { isoParse } from "../functions/isoParse"

const OneTask = (props) => {



    // console.log('tasks state-', props.tasks)
    // console.log('props.match.params.id -', props.match.params.id)

   const match = props.tasks.filter(el => el._id === props.match.params.id)
    // console.log('match-', match)
    // console.log('checklist-', match[0].checklist)
    
     
    const loaded = () => {
    
    

    return (
        match.map((item, index) => (
        <div>
            <Nav/>
            <h1>{item.name}</h1>
            <small>Affirmation</small>
            <div>Last Done: {isoParse(item.lastDone)}</div>
            <div>Frequency: {item.frequency}</div>
            <div className="checklist">
                <ul>{item.checklist[0].name}{item.checklist[0].checked}</ul>
            </div>
        </div>
        )))
    }

    const loading = () => {
        return (<div>Loading ...</div>)
    }

    return match.length > 0 ? loaded() : loading()
}


export default OneTask

