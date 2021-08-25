import React, { useEffect } from "react"
import { Link } from "react-router-dom"

import Affirm from "../components/Affirm"
import Logo from "../components/Logo"

const Logout = (props) => {
    useEffect( async () => {
        await props.setAuthZ({username: null, token: null})
    }, [])

    return (
        <div>
            <Logo />
            <Affirm />
            <Link to="/">
                Log back in!
            </Link>
        </div>
    )
}

export default Logout