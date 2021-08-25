import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/addedit.scss'
import Logo from '../components/Logo'

import Button from '../components/Button';
import Nav from '../components/Nav';
import Affirm from "../components/Affirm"

import { isoParse } from '../functions/isoParse';

const AddEdit = (props) => {
  const [ initial, setInitial ] = useState("")
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    if (props.match.params.id && props.tasks.length > 0) {
      const data = props.tasks.filter((item) => (item._id === props.match.params.id))
      const freq = data[0]?.frequency
      switch (true) {
        case freq >= 365:
          data[0].frequency = {number: Math.round(freq/365), multiplier: 365}
          break;
        case freq >= 30:
          data[0].frequency = {number: Math.round(freq/30), multiplier: 30}
          break;
        case freq >=7 :
          data[0].frequency = {number: Math.round(freq/7), multiplier: 7}
          break;
        default:
          data[0].frequency = {number: freq, multiplier: 1} 
      }
      setInitial(data[0])
    } else {
      setInitial("")
    }
  }, [props.match.params.id])

  const select = (num) => {
    if (initial?.frequency?.multiplier === num) {
      return true
    } else {
      return false
    }
  }

  // console.log(errors);
  const addEdit = async (data) => {
    const lastDone = (data.lastDone === "" ? Date.now() : Date.parse(data.lastDone))
    data = {
      ...data,
      _id: initial._id,
      username: props.username,
      lastDone: lastDone,
      frequency: data.frequency.number*data.frequency.multiplier
    }
    if (initial === "") {
      props.handleCreate(data)
      props.history.push('/mylist')

    } else {
      props.handleUpdate(data)
      setInitial("")
      props.history.push(`/task/${initial._id}`)
    } 
  }

  const handleDelete = () => {
    window.confirm("Are you sure you want to delete this reminder?")
    if (initial !== "") {
      props.handleDelete(initial)
    }
    props.history.push("/")
  }

  return (
    <div>
      <div className="logos"><Logo lo="addeditLogo"/></div>
      <Nav tasks={props.tasks}/>
      <form className= "addedit" onSubmit={handleSubmit(addEdit)}>
        <h1>Add a Task</h1>
        <label>I want to
            <input type="text" defaultValue={initial.name} placeholder="do a thing" {...register("name", {required: true})} />
        </label>
        <label> Every 
          <input type="number" defaultValue={initial?.frequency?.number} placeholder="42" {...register("frequency.number", {required: true})} />
          <select className="dropdown" {...register("frequency.multiplier")}>
            <option value="1" selected={select(1)} >Days</option>
            <option value="7" selected={select(7)}>Weeks</option>
            <option value="30" selected={select(30)}>Months</option>
            <option value="365" selected={select(365)} >Years</option>
          </select>.
        </label>
        <label for="lastDone">I last did that on
            <input type="date" defaultValue={isoParse(initial.lastDone)} placeholder="datetime" {...register("lastDone", {})} />
        </label>
        <input className="reminder" type="submit" value={initial === "" ? "Set Reminder" : "Update"} />
        <Button className="delete-button" handleClick={() => {handleDelete()}} text="Delete" />
      </form>
      <div className="addeditaffirm"><Affirm /></div>
    </div>
  );
}

export default AddEdit