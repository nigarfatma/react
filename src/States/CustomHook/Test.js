import React, {  useState } from "react";
import UseCustom from "./useCustom";

const Test=()=>{
    const [count,setCount]=useState(0)
    UseCustom(count)
    return(
        <>
<h1>{count}</h1>
<button onClick={()=>{setCount(count+1)}}>Click Me</button>
        </>
    )
}
export default Test