import React, { useState } from "react";

const Button=()=>{
    const [showButton,setShowButton]=useState(false)
    const submitHandler=()=>{
        setShowButton(true)
    }
    return(
        <>
<button onClick={submitHandler}>Submit</button>
{showButton? alert("your form is submitted"):''}

        </>
    )
}
export default Button
