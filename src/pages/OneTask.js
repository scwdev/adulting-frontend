import React from "react"
import { Link } from "react-router-dom"

import Nav from "../components/Nav"

import { isoParse } from "../functions/isoParse"
import { dayParse } from "../functions/dayParse"

const OneTask = (props) => {

    const match = props.tasks.filter(el => el._id === props.match.params.id)
     
    const loaded = () => {

    return (
        match.map((item, index) => (
        <div>
            <Nav tasks={props.tasks}/>
            <h1>{item.name}</h1>
            <small>Affirmation</small>
            <div>Last Done: {isoParse(item.lastDone)}</div>
            <div>Frequency: Every {dayParse(item.frequency)}</div>
            {/* <div className="checklist">
                <ul>{item?.checklist[0].name}{item?.checklist[0].checked}</ul>
            </div> */}
            <Link to={`/edit/${item._id}`}>Edit</Link>
        </div>
        )))
    }

    const loading = () => {
        return (<div>Loading ...</div>)
    }

    return match.length > 0 ? loaded() : loading()
}


export default OneTask

