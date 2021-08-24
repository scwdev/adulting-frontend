import React from 'react';
import { useForm } from 'react-hook-form';

import Nav from '../components/Nav';

const AddEdit = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  // console.log(errors);
  
  const addEdit = (data) => {
    //TODO "new Date(data.lastDone)" returns date off by 4 hours. needs a fix
    const lastDone = data.lastDone === "" ? new Date() : new Date(data.lastDone)
    data = {
      ...data,
      username: props.username,
      lastDone: lastDone,
      frequency: data.frequency.number*data.frequency.multiplier
    }
    props.handleCreate(data)
  }

  return (
    <div>
      <Nav />
      <form onSubmit={handleSubmit(addEdit)}>
        <label>I want to
          <input type="text" placeholder="do a thing" {...register("name", {required: true})} />
        </label>
        <br />
        <label>
          Every 
          <input type="number" placeholder="0" {...register("frequency.number", {required: true})} />
          <select {...register("frequency.multiplier")}>
            <option value="1">Days</option>
            <option value="7">Weeks</option>
            <option value="28">Months</option>
            <option value="365">Years</option>
          </select>.
        </label>
        <br />
        <label for="lastDone">I last did that on
          <input type="date" placeholder="datetime" {...register("lastDone", {})} />
        </label>
        <br />
        <input type="submit" value="Set Reminder" />
      </form>
    </div>
  );
}

export default AddEdit