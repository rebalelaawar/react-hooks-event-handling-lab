import React from "react"

function Keypad (){
    function enteringPassword(){
       console.log("Entering password...")
    }
    return (
        <div>
        <input type="password" onChange={enteringPassword}></input>
        </div>
    )
}

export default Keypad;