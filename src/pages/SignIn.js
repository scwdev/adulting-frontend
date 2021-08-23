import React from 'react';
import { Link } from 'react-router-dom';
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
    if (auth.error) {
      window.alert(auth.error)
    }
    if (auth.token) {
      props.setAuthZ({username: data.username, token: auth.token})
      props.history.push('/')
    }
  }

  // const  = () => { 

  console.log(errors);
  
  return (
    <div>
      <form onSubmit={handleSubmit(signIn)}>
        <h2>Sign-In</h2>
        <input type="text" placeholder="Email" {...register("username", {required: true, pattern: /^\S+@\S+$/i})} />
        {errors.username && <p>please enter a valid email address</p>}
        <input type="password" placeholder="Password" {...register("password", {required: true})} />
        {errors.password && <p>please enter a password</p>}
        <input type="submit" />
      </form>
      <Link to="/sign-up">Create a new account!</Link>
    </div>
  );
}

export default SignIn
