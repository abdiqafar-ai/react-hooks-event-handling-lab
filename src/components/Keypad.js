import React, {useState} from "react";


function Keypad (){
    
    const [password, setPassword] =useState("");

    const handleInput = () => {
        console.log("Entering password...")

    }
    return (
        <div>
            <input type="password" value={password} placeholder="Enter password" onChange={(e) => {
                setPassword(e.target.value);
                handleInput(e);
            }}/>

        </div>
    )
}

export default Keypad;