import React from 'react'
import lightbulb from "../transparent-lightbulb.png"

import "../styles/lightbulb.scss"

import { Link } from 'react-router-dom'

const Lightbulb = (props) => {
    return (
        <Link to="/">
            <img src={lightbulb} className="lightbulb"/>
        </Link>
    )
}

export default Lightbulb