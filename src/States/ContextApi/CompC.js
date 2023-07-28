import React, { useContext } from 'react'
import { FirstName } from '../../App'

const CompC=()=>{
    const fname=useContext(FirstName)
    return(
        <>
    <h1>my name is {fname}</h1>
        {/* <FirstName.Consumer> {(fname)=>{
          return    <h1>My name is {fname}</h1>
            }
        }
       
        </FirstName.Consumer> */}

        </>
    )
}
export default CompC
