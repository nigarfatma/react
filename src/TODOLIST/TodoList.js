import React from 'react'

const TodoList=(props)=>{
  
return (
    <>
     <i class="fa-solid fa-plus" style={{"padding-top":"1rem"}} onClick={()=>props.onSelect(props.id)}></i>
<li style={{"list-style":"none"}}> {props.text} </li>
    </>

)


        
    
}
export default TodoList