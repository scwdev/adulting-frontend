import React from 'react';
import { useForm } from 'react-hook-form';

const SignUp = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const signUp = async (data) => {
    // create new user
    await fetch( props.url + "/user/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    // login the new user
    const response = await fetch( props.url + "/user/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    // send authZ token to App as state
    const auth = await response.json()
    props.setAuthZ({username: data.username, token: auth.token})
  }
  
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(signUp)}>
        <h2>Sign-Up!</h2>
      {/* <input type="text" placeholder="Name" {...register("Name", {required: true, maxLength: 80})} /> */}
      <input type="text" placeholder="Email" {...register("username", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="password" placeholder="Password" {...register("password", {})} />
      <input type="submit" />
    </form>
  );
}

export default SignUp