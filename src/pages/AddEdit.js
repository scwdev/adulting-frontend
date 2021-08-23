import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Task Name" {...register("Task Name", {required: true, maxLength: 80})} />
      <input type="number" placeholder="Frequency" {...register("Frequency", {required: true, maxLength: 100})} />
      <select {...register("Category", { required: true })}>
        <option value="Category 1">Category 1</option>
        <option value=" Category 2"> Category 2</option>
      </select>
      <input type="text" placeholder="Checklist" {...register("Checklist", {required: true, maxLength: 12})} />

      <input type="submit" />
    </form>
  );
}