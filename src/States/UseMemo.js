import React, { useState } from "react";

const UseMemo=()=>{
    const [num,setNum]=useState(0)
    const [show,setShow]=useState(true)
    
    const getValue=()=>{
        setNum(num+1)
    }
    return(
        <>
   <button onClick={getValue}>Counter</button>
   <p>My New Number:{num}</p>
   <button onClick={()=>setShow(!show)}>{show? "Clicked Me":"you clicked"}</button>
   
        </>
    )
}
export default UseMemo