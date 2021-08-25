import React from "react"
import { Link } from "react-router-dom"
import "../styles/oneTask.scss"
import Logo from '../components/Logo'
import Button from '../components/Button'

import Nav from "../components/Nav"
import Affirm from "../components/Affirm"

import { isoParse } from "../functions/isoParse"
import { dayParse } from "../functions/dayParse"

const OneTask = (props) => {

    const match = props.tasks.filter(el => el._id === props.match.params.id)
     
    const loaded = () => {

    return (
        match.map((item, index) => (
        <div className="oneTask">
            <Logo lo="oneTaskLogo"/>
            <Nav tasks={props.tasks}/>
            <span>You can do it!</span>
            <h1>{item.name}</h1>
            <div>Last Completed: {isoParse(item.lastDone)}</div>
            <div>Frequency: Every {dayParse(item.frequency)}</div>
            {/* <div className="checklist">
                <ul>{item?.checklist[0].name}{item?.checklist[0].checked}</ul>
            </div> */}
            <div>
            <Link to={`/edit/${item._id}`}><button>Edit</button></Link>
            <Button className="delete-button" handleClick={() => {props.handleDelete(item)}} text="Delete :(" />
            </div>
            <Affirm />
        </div>
        )))
    }

    const loading = () => {
        return (<div>Loading ...</div>)
    }

    return (
        match.length > 0 ? loaded() : loading()
    )
}


export default OneTask

