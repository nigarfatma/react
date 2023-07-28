import React, { useState } from "react";

const Form=()=>{
    const [showField,setshowField]=useState(false)
    const[show,setShow]=useState(false)
    const [details,setDetails]=useState({
      title:'',
      amount:''
    })
    const addHandler=()=>{
        setshowField(true)
    }
    const cancelHandler=()=>{
      setshowField(false)
    }
    const submitHandler=(e)=>{
      e.preventDefault()
console.log(details);
setShow(true)
    }
    const inputHandler=(e)=>{
const {name,value}=e.target
setDetails({...details,[name]:value})
    }
    return(
        <>
{!showField && (<button onClick={addHandler}>Add Expenses</button>)}
{showField &&  <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            name="title"
           onChange={inputHandler}
           value={details.title}
         
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            name="amount"
          value={details.amount}
          onChange={inputHandler}
          />
        </div>
       
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={cancelHandler} >Cancel</button>
        <button type='submit'>Add Expense</button>

        {show ?
        <>
          <p>{details.title}</p>
          <p>{details.amount}</p>
          </>
        :''}
      </div>
    </form>}
        </>
    )
}
export default Form