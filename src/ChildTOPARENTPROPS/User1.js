import React from "react";

const User1=(props)=>{
    let data={
        name:"nigar",
        email:"nigar@gmail.com"
    }
    return(
        <>
<p>User Name:</p>
<button onClick={()=>props.alert(data)}>Clicked</button>
        </>
    )
}
export default User1