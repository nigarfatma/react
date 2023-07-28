import React, { useState } from "react";
import TodoList from "./TodoList";

const TodoAdd=()=>{
   
    const [details,setDetails]=useState("")
    const [input,setInput]=useState([])
    const deleteHandler=(id)=>{
        console.log("deleted");
        setInput((oldItem)=>{
            return oldItem.filter((arrEle,index)=>{return index!==id})
        })
       }
    const inputHandler=(e)=>{

setDetails(e.target.value)
    }
    const formHandler=(e)=>{
        e.preventDefault()
        // console.log("details",details);
        setInput((oldItem)=>{
return [...oldItem,details]

        })
        setDetails("")
    }
    return(
        <>
        <form action="" onSubmit={formHandler}>
        <input type="text" name="name" value={details} onChange={inputHandler}/> <br />
<button type='submit'>Add Item</button>
<ol>
   
    {
        input.map((itemVal,index)=>{
return   <TodoList key={index} id={index} text={itemVal} onSelect={deleteHandler}/>
    {/* <div>
    <i class="fa-solid fa-plus" style={{"padding-top":"1rem"}}></i>
    <li style={{"list-style":"none"}}>{itemVal}</li>
    </div> */}
 


        })
    }
</ol>
        </form>

        </>
    )
}
export default TodoAdd