import React from 'react'
import {useForm} from 'react-hook-form'

const SignInForm = (props) => {
    return (
         <form>
             <input {...register("username")}/>
             <input {...register("password")}/>
             <input {...register("name")}/>
             <input {...register("email")}/>
             <input type="Submit"/>
             
        </form>
    )
}

export default SignInForm
