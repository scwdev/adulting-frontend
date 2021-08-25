import React from 'react'
import logo from "../logo.png"

const Logo = (props) => {
    return (
        <a href="/">
        <img src={logo} className={props.lo}/>
        </a>
    )
}

export default Logo