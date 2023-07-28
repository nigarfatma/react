import React from "react";

const Button=()=>{
    const [ToggleState, setToggleState] = useState(false);
    return(
        <>
 <button onClick={()=>{setToggleState(!ToggleState)}}>clicked</button>
   {ToggleState ? <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, omnis?</p>:''}
    </>
        
    )
}
export default Button