import React, { useEffect } from "react"
import { Link } from "react-router-dom"

import Affirm from "../components/Affirm"
import Logo from "../components/Logo"
import '../styles/logout.scss'

const Logout = (props) => {
    useEffect( async () => {
        await props.setAuthZ({username: null, token: null})
    }, [])

    return (
        <div>
            <div className="logos"><Logo lo="logoutLogo" /></div>
            
            <div className="loginbox">
            <Link className="logbackin" to="/">
                Log back in!
            </Link>
            </div>

            <Affirm />
        </div>
    )
}

export default Logout