// import React,{useRef} from 'react'

// const UseRef=()=>{
// const inputref = useRef("");
//     const handleSubmit=()=>{
//       console.log(inputref.current.value);
//       inputref.current.focus()
//       inputref.current.style.backgroundColor="red"
//     }
//     return(
//         <>
// <input ref={inputref} type="text" />
// <button onClick={handleSubmit}>Sumbit</button>
//         </>
//     )

// }
// export default UseRef

import React from 'react'
import { useRef } from 'react'

const UseRef=()=>{
  const inputRef=useRef()
  const handlerSubmit=()=>{
console.log("clicked");
// inputRef.current.value="100"
// inputRef.current.focus()
// inputRef.current.style.display="none"
// inputRef.current.style.color="red"
// inputRef.current.style.backgroundColor="yellow"
// inputRef.current.style.borderColor="lightpink"
  }
  return(
    <>
<input type="text" ref={inputRef}/>
<button onClick={handlerSubmit}>Submit</button>
    </>
  )
}
export default UseRef