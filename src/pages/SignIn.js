import React from 'react';
import { useForm } from 'react-hook-form';

const SignIn = (props) => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const signIn = async (data) => {
    const response = await fetch( props.url + "/user/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    const auth = await response.json()
    props.setAuthZ({username: data.username, token: auth.token})
  }

  // console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(signIn)}>
      <h2>Sign-In</h2>
      <input type="text" placeholder="Email" {...register("username", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="password" placeholder="Password" {...register("password", {})} />
      <input type="submit" />
    </form>
  );
}

export default SignIn
