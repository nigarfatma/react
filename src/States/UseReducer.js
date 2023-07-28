
// import React, { useReducer } from 'react';

// export default function UseReducer() {

//     let reducer = (state,action)=>{
//         if (action.type==='COL') {
//             state= "blue"
//         }
//         return state
//         }
    
    
//     let [state,dispatch] =useReducer(reducer,"red")

    
//   return (
//     <div>
//       <h1 style={{color:state}}>Laptop</h1>
   
//       <button onClick={()=>{dispatch({type:'COL'})}}>+</button>
      
//     </div>
//   );
// }
import React,{useReducer} from "react";

const UseReducer=()=>{
  const initialState=0
  const reducer=(state,action)=>{
    console.log(state,action);
    if(action.type==="INCREMENT"){
      return state+1
    }
    else if(action.type==="DECREMENT"){
      return state-1
    }
return state;
  }
 const [state,dispatch] = useReducer(reducer,initialState)
  return(

    <>

<p>{state}</p>
<div>
  <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
  <button onClick={()=>dispatch({type:"DECREMENT"})}>decrement</button>
</div>
    </>
  )
}
export default UseReducer