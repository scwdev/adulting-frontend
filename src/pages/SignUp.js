import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo'
import '../styles/signUp.scss'

const SignUp = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const signUp = async (data) => {
    // create new user
    const newUser = await fetch( props.url + "/user/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    if (newUser.status === 200) {
      const response = await fetch( props.url + "/user/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      const auth = await response.json()
        props.setAuthZ({username: data.username, token: auth.token})
        props.history.push('/')
    } else {
      window.alert("An account with that email already exists")
    }
  }
  
  return (
    <div className="signUp">
      <Logo lo="logo"/>
      <h2>Sign-Up!</h2>
      <form onSubmit={handleSubmit(signUp)} className="form">        
        <input type="text" placeholder="example@email.com" {...register("username", {required: true, pattern: /^\S+@\S+$/i})} />
        {errors.username && <p>please enter a valid email address</p>}
        <input type="password" placeholder="Password" {...register("password", {required: true, minLength: 8})} />
        {errors.password && <p>password must be at least 8 characters</p>}
        <input type="text" placeholder="Name (optional)" {...register("name")} />
        <input type="submit" />
      </form>
      <Link className="createAcct" to="/">Already have an account?</Link>
    </div>
  );
}

export default SignUp