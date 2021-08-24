import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import Nav from '../components/Nav';

const AddEdit = (props) => {
  const [ initial, setInitial ] = useState("")
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    if (props.match.params.id) {
      const data = props.tasks.filter((item) => (item._id === props.match.params.id))
      // console.log(new Date(data[0]?.lastDone).toISOString().split("T"))
      const freq = data[0]?.frequency
      switch (true) {
        case freq%365 === 0:
          data[0].frequency = {number: freq/365, multiplier: 365}
          break;
        case freq%28  === 0:
          data[0].frequency = {number: freq/28, multiplier: 28}
          break;
        case freq%7 === 0:
          data[0].frequency = {number: freq/7, multiplier: 7}
          break;
        default:
          data[0].frequency = {number: freq, multiplier: 1} 
      }
      setInitial(data[0])
    } else {
      setInitial("")
    }
  }, [props.tasks])

  const isoParse = (ms) => {
    const dateObj = new Date(ms)
    const isoArr = dateObj.toISOString().split("T")
    return isoArr[0]
  }

  // console.log(errors);
  const addEdit = (data) => {
    //TODO "new Date(data.lastDone)" returns date off by 4 hours. needs a fix
    console.log(data.lastDone)
    const lastDone = data.lastDone === "" ? new Date() : Date.parse(data.lastDone)
    data = {
      ...data,
      username: props.username,
      lastDone: lastDone,
      frequency: data.frequency.number*data.frequency.multiplier
    }
    props.handleCreate(data)
    props.history.push("/mylist")
  }

  return (
    <div>
      <Nav />
      <form onSubmit={handleSubmit(addEdit)}>
        <label>I want to
          <input type="text" defaultValue={initial.name} placeholder="do a thing" {...register("name", {required: true})} />
        </label>
        <br />
        <label>
          Every 
          <input type="number" defaultValue={initial?.frequency?.number} placeholder="42" {...register("frequency.number", {required: true})} />
          <select defaultValue={initial?.frequency?.multiplier} {...register("frequency.multiplier")}>
            <option value="1">Days</option>
            <option value="7">Weeks</option>
            <option value="28">Months</option>
            <option value="365">Years</option>
          </select>.
        </label>
        <br />
        {/* {Date.toString(1629775054578)} */}
        <label for="lastDone">I last did that on
          <input type="date" defaultValue="Aug 23 2021" placeholder="datetime" {...register("lastDone", {})} />
        </label>
        <br />
        <input type="submit" value="Set Reminder" />
      </form>
    </div>
  );
}

export default AddEdit