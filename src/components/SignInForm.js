import React from 'react'
import {useForm} from 'react-hook-form'

const SignInForm = (props) => {
    const { register, handleSubmit} = useForm();

    return (
    <form onSubmit={handleSubmit(data => saveData(data))}>
        <h1>Sign In</h1>
        <label>Username</label>
        <input username="username" ref={register({ required: "Required"})}/>
        <label>Password</label>
        <input password="password" ref={register({ required: "Required"})}/>
        <input type="submit" className="submitButton"/>
    </form>
    )
}

export default SignInForm
