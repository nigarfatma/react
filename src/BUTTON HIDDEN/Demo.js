import React, { useState } from 'react';

function Demo() {
    const [state,setState]=useState({
        fname:''
    })
    const handleInput=(e)=>{
        const[name,value]=e.target
        setState({...state,[name]:value})
    }
  return (
    <div>
      <input type="text" name="fname" value={state.fname} onChange={handleInput}/>
      <button disabled={!state.fname}>Submit</button>
    </div>
  );
}

export default Demo;
