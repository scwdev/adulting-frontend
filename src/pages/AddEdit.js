import React from 'react';
import { useForm } from 'react-hook-form';

export default function App(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);
  console.log(errors);
  



  return (
    <form onSubmit={handleSubmit(props.handleSubmit)}>
      <input type="text" placeholder="Task Name" {...register("name", {required: true, maxLength: 80})} />
      <input type="number" placeholder="Frequency" {...register("frequency", {required: true, maxLength: 100})} />
      <select {...register("tags", { required: true })}>
        <option value="Category 1">Category 1</option>
        <option value=" Category 2"> Category 2</option>
      </select>
      <input type="text" placeholder="Checklist" {...register("checklist")} />

      <input type="submit" />
    </form>
  );
}