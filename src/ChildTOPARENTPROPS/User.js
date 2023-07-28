import React, { useState } from "react";
import User1 from "./User1";

const User=()=>{
  
const details=(data)=>{
    console.log(data);
    alert(data.name)
}
    return(
        <>
<h1>Lifting State Up </h1>
<User1 alert={details}/>
        </>
    )
}
export default User