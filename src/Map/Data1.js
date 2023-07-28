import React from "react";

const Data1=(props)=>{
    return(
        <>
{props.text.map((data,index)=><li key={index}>{data}</li>)}
        </>
    )
}
export default Data1