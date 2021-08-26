import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

import "../styles/oneTask.scss"

import Lightbulb from '../components/Lightbulb'
import Button from '../components/Button'
import Nav from "../components/Nav"
import Affirm from "../components/Affirm"
import ProgBar from "../components/ProgBar"

import { dayParse } from "../functions/dayParse"

const OneTask = (props) => {
    const [ snoozePop, setSnoozePop ] = useState(null)
    const { register, handleSubmit, formState: { errors } } = useForm()

    const match = props.tasks.filter(el => el._id === props.match.params.id)
     
    const loaded = () => {
    
        const task = match[0]

        const resetTimer = () => {
            const update = {...task, lastDone: Date.now()}
            props.handleUpdate(update)
        }

        const snooze = (data) => {
            const msDays = (days) => (days*1000*60*60*24)
            const update = {...task,
                lastDone: ((Date.now().toString()) - (msDays(task.frequency)+task.lastDone) + (msDays(data.number*data.multiplier)) + (task.lastDone))
            }
            props.handleUpdate(update)
            setSnoozePop(null)
        }   

        const snoozeForm = () => {
            
            return(
                <div>
                    <div>For how long?</div>
                    <form className="snooze-form" onSubmit={handleSubmit(snooze)}>
                            <input type="number" {...register("number", {required: true, min: 0})} />
                            <select className="dropdown" {...register("multiplier")}>
                                <option value="1">Days</option>
                                <option value="7">Weeks</option>
                                <option value="30">Months</option>
                                <option value="365">Years</option>
                            </select>.
                            <input className="snooze-submit" type="submit" value="submit" />
                    </form>
                    {errors.number && <p>please enter a positive number</p>}
                </div>
            )
        }

        return (
            <main>
                <h1>{task.name}</h1>
                <h2>
                    Every {dayParse(task.frequency, "")}
                </h2>
                <p className="lastCompleted">
                    {((task.lastDone - Date.now())/86400000 + task.frequency) >= 0 && `Next up in ${dayParse(Math.round((task.lastDone - Date.now())/86400000 + task.frequency), "a ")}`}
                    {((task.lastDone - Date.now())/86400000 + task.frequency) < 0 && `Past due by ${dayParse(Math.round((task.lastDone - Date.now())/86400000 + task.frequency), "a ")}`}
                </p>
                <ProgBar width="19" task={task} height=".8" />
                <div>
                    <Button className="done-button" handleClick={() => {resetTimer(task)}} text="Done!" />
                    <br/>
                    <Link to={`/edit/${task._id}`}><button>Edit / Delete</button></Link>
                    <Button className="snooze-button" handleClick={() => {setSnoozePop(snoozeForm)}} text="Snooze!" />
                    {snoozePop}
                </div>
            </main>
        )
    }

    const loading = () => {
        return (<div>Loading ...</div>)
    }

    return (
        <div className="oneTask flex-container">
            <Lightbulb lightbulb="oneTaskLogo"/>
            <Nav tasks={props.tasks}/>
            {match.length > 0 ? loaded() : <Link className="prompt" to="/new" >Add some reminders!</Link>}
            <Affirm />
        </div>
    )
}


export default OneTask

