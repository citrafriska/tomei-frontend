import React from 'react'

function Header() {
    return (
        <>
            <div className="signup-logo">
                <img src={require("../assets/Logo.png").default} alt="tomei-logo"/>
            </div> 
        </>
    )
}

export default Header
