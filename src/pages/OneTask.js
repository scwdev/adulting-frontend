import React from "react"
import { Link } from "react-router-dom"
import "../styles/oneTask.scss"
import Logo from '../components/Logo'
import Button from '../components/Button'

import Nav from "../components/Nav"
import Affirm from "../components/Affirm"
import ProgBar from "../components/ProgBar"

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
            <h1>{item.name}</h1>
            <div>
                Last Completed: {dayParse(Math.round((item.lastDone - Date.now())/86400000))} ago
            </div>
            <div>
                Frequency: Every {dayParse(item.frequency)}
            </div>
            <ProgBar task={item} width="10" height="1" color="grey" background="lightgrey"/>
            <div>
                <Link to={`/edit/${item._id}`}><button>Edit</button></Link>
                <Button className="delete-button" handleClick={() => {props.handleDelete(item)}} text="Delete" />
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

