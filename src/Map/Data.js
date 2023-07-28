import React from "react";
import Data1 from "./Data1";
const DUMMY_EXPENSES=[
    'Learn React',
    'Practice React',
    'Nodejs!'
]
const Data=()=>{
    return(
        <>
<Data1 text={DUMMY_EXPENSES}/>
        </>
    )
}
export default Data