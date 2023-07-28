// import React ,{useState} from 'react'
// import './state.css'




// const UseState=()=>{
//     const [count,setCount]=useState(30)

//     return(
//         <>
//         <div>
//             <h1>{count}</h1>
//             <button onClick={()=>{setCount(count+1)}}>Clicked Me</button>
//             </div>
//         </>
//     )
// }
// export default UseState


// State with object

import React, { useState } from "react";

const UseState=()=>{ 
   const [input,setInput] = useState({
        name:"nigar", age:25, degree:"B.tech" 
    })
const buttonHandler=()=>{
    setInput({...input,name:"fatma"})
}
       return (
        <>
<div>
    <h1>{`my name is ${input.name} and age is ${input.age} and  my degree is ${input.degree}`}</h1>
    <button onClick={buttonHandler}>Click Me</button>
</div>
</>
       )
    

   
       
}
export default UseState