import React, { useEffect, useState } from "react";

const UseEffect=()=>{
    const [count,setCount]=useState(0)
    const [num,setNum]=useState(0)
    useEffect(()=>{
        alert("clicked")
    },[count])
    return(
        <>
<button onClick={()=>{setCount(count+1)}}>Click Me {count}</button>
<br />
<button onClick={()=>{setNum(num+2)}}>Click Me {num}</button>
        </>
    )
}
export default UseEffect