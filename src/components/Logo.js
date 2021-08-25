import React from 'react'
import logo from "../logo.png"

import { Link } from 'react-router-dom'

const Logo = (props) => {
    return (
        <Link to="/">
            <img src={logo} className={props.lo}/>
        </Link>
    )
}

export default Logo