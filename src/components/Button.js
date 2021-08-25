import React from "react"

const Button = (props) => {

    const handleClick = props.handleClick
    const text = props.text
    const className = props.className

    return (
        <button className={className} onClick={handleClick}>{text}</button>
    )
}

export default Button