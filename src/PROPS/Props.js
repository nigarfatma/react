// import User1 from './User1';
// const Props=()=>{
//     return(
// <>
// <User1 title={"hello"}/>

// </>
//     )
// }
// export default Props

// 2.

import React from "react";
import User1 from './User1'
import User2 from "./User2";

const Props=()=>{
    let detailsEmployee={
        name:"fatma",
        designation:"fullStack Developer"
    }
    return(
        <>
{/* <User1 text={detailsEmployee.designation}/> */}
<User2 text={detailsEmployee.name}/>
        </>
    )
}
export  default Props