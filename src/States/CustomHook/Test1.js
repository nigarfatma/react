import React, {  useState } from "react";
import UseCustom from "./useCustom";

const Test1=()=>{
    const [count,setCount]=useState(0)
    UseCustom(count)
    return(
        <>
<h1>{count}</h1>
<button onClick={()=>{setCount(count+1)}}>Click Test</button>
        </>
    )
}
export default Test1