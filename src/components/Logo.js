import React from 'react'
import logo from "../logo.png"

const Logo = (props) => {
    return (
        <img src={logo} className={props.logo}/>
    )
}

export default Logo