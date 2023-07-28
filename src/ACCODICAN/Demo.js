// import { useState } from "react"
import React, {useState} from "react"

const Demo=(props)=>{
  const [state, setstate] = useState();
  
//   let {fname,title}=props
return(
    <>
  
    <div className="d-flex justify-content-center align-items-center">
      <button onClick={()=>setstate(0)}>box 1</button>
      <button onClick={()=>{setstate(1)}}>box 2</button>
      <button onClick={()=>{setstate(2)}}>box 3</button>
    </div>
    <div className="d-flex justify-content-center align-items-center">
      <span hidden={state!==0}><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, possimus!</p></span>
      <span hidden={state!==1}><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt consequuntur blanditiis voluptas cumque natus veniam culpa nihil. Eveniet consectetur consequuntur quia aut fugiat fugit iure nam unde aperiam, quae totam?
      </p></span>
      <span hidden={state!==2}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, doloremque tempore?</p></span>
    </div>
    
    </>
)
}
export default Demo