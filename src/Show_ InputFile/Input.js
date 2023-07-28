// import React, { useState } from "react";

// const Input=()=>{
//     const[fullName,setName]=useState({
//         fName:'',
//         email:''
//     })
//     const[show,setShow]=useState(false)
//     const inputSumbit=(e)=>{
      
//  const {name,value}=e.target
//  setName({...fullName,[name]:value})
//     }
//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         setShow(true)
//     }
// return(
//     <>
   
// <form onSubmit={handleSubmit}>
//     <input type="text" placeholder="Enter Your Name" value={fullName.fName} name="fName" onChange={inputSumbit}/> <br />
//     <input type="email"  placeholder="Enter Your Email" value={fullName.email} name="email" onChange={inputSumbit}/> <br />
//     <button type="submit">Submit</button>
//     {show ? 
//     <div>
//         <p>Name:{fullName.fName}</p>
//         <p>Email:{fullName.email}</p>
//     </div>
// :''}
// </form>

//     </>
// )
// }
// export default Input
import React, { useState } from "react";

const Input=()=>{
    const [details,setDetails]=useState({
        name:'',
        email:''
    })
    const [show,setShow]=useState(false)
    const inputHandler=(e)=>{
        const {name,value}=e.target
        setDetails({...details,[name]:value})
    }
    const formHandler=(e)=>{
e.preventDefault()
console.log(details);
setShow(true)
    }
    return(
        <>
       
        <form action="" onSubmit={formHandler}>
<input type="text" placeholder="Enter your name" name="name" value={details.name} onChange={inputHandler}/>
<input type="email" placeholder="Enter your email" name="email" value={details.email} onChange={inputHandler}/>
<button type="submit">Submit</button>
</form>
{
    show?
    <>
   
    
    <p>Name:{details.name}</p>
    <p>Email:{details.email}</p>
    </>:''
}
        </>
    )
}
export default Input