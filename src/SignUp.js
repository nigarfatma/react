import React,{useState,useEffect} from "react";
// import './state.css'

const SignUp=()=>{
    // const newTime=new Date().toLocaleTimeString()
    // const [time,setTime]=useState(newTime)
    // const upDated=()=>{
    // const newTime=new Date().toLocaleTimeString()

    // Validation
const [validfName,setvalidfName]=useState();
const [validPassword,setvalidPassword]=useState();
const [validconfirmPassword,setconfirmPassword]=useState();
const [drop,setDrop]=useState();

   const [fullName,setName]=useState({
    fname:'',
    password:'',
    cPassword:'',
    email:'',
    qualifaction:'',
    gender:'',
    vehicle:'',
    vehicle1:'',
    dropdown:''

   })
   useEffect(() => {
    if(fullName.fname.length<4&&fullName.fname.length>0){setvalidfName(true)}else{setvalidfName(false)}
    if (fullName.password.length>0 && fullName.password.search("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$")){setvalidPassword(true)}else{setvalidPassword(false)}
 fullName.cPassword.length>0 && fullName.cPassword!==fullName.password?setconfirmPassword(true):setconfirmPassword(false)
 
   },[fullName]);
 
   const [dev,setDev]=useState([])
    const handleSubmit=(e)=>{
      fullName.dropdown.search('[a-z A-Z 0-9]')?setDrop(true):setDrop(false)
      e.preventDefault()
      if (fullName.fname.length<4 ||
        fullName.password.search("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$") ||
        fullName.dropdown.search('[a-z A-Z 0-9]') ||
        fullName.cPassword!==fullName.password) {
        alert('please fill all the input field properly')
      }else{
        console.log(fullName);
        const Id= {...fullName,id:new Date().getTime().toString()}
         setDev([...dev,Id])
         setName({
           fname: '',
           email: '',
           qualifaction: '',
           gender: '',
         });
      }
      
     
}
const inputEvent=(e)=>{
  const {name,value} = e.target;
  // const value = e.target.value;
  setName({...fullName,[name]: value})
  console.log(fullName.gender)
}

const inputEvent1=(e)=>{
  let {name,id}=e.target
  setName({...fullName,[name]:id})
}
const checkedSubmit=(e)=>{
let {name,checked}=e.target
setName({...fullName,[name]:checked})

}
    return(
        <>
 <div className="container">
 <form action="/action_page.php" onSubmit={handleSubmit}>
  <div className="mb-3 mt-3">
  <div className="mb-3">
    <label for="name" className="form-label">Name:</label>
    <input type="text" className="form-control" id="name" placeholder="Enter Name" name="fname" onChange={inputEvent} value={fullName.fname}/>
    {validfName?<p className="text-danger">Minimun 4 character required</p>:''}
  </div>
  <div className="mb-3">
    <label for="name" className="form-label">Password:</label>
    
    <input type="password" className="form-control" placeholder="Enter password" onChange={inputEvent} value={fullName.password} name="password"/>
    {validPassword?<p className="text-danger">Password must contain minimum 8 character, one lowercase letter, one uppercase letter, one number, one special character & no space</p>:''}

  </div>
  <div className="mb-3">
    <label for="name" className="form-label">cPassword:</label>
    <input type="password" className="form-control" id="name" placeholder="Enter password" name="cPassword" onChange={inputEvent} value={fullName.cPassword}/>
    {validconfirmPassword?<p className="text-danger">Password and confirmpassword should be match</p>:''}
    {/* {validPassword?<p>Minimun 4 character required</p>:''} */}
  </div>
    <label for="email" className="form-label">Email:</label>
    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={inputEvent} value={fullName.email}/>
    {}
    <div className="mb-3">
    <label for="qualifaction" className="form-label">qualifaction:</label>
    <input type="text" className="form-control" id="qualifaction" placeholder="Enter qualifaction" name="qualifaction" onChange={inputEvent} value={fullName.qualifaction}/>
    </div>
    <div class="form-check">
  <input type="radio" class="form-check-input" id="male" name="gender" value={fullName.gender}  onChange={inputEvent1}  />Male
  <label class="form-check-label" for="radio1"></label>
</div>
<div class="form-check">
  <input type="radio" class="form-check-input" id="female" name="gender" value={fullName.gender}  onChange={inputEvent1}  />Female
  <label class="form-check-label" for="radio2"></label>
</div>
<h1>Choose the correct option</h1>
    <input type="checkbox" id="vehicle1" name="vehicle" checked={fullName.vehicle} onChange={checkedSubmit}/>
  <label for="vehicle1"> I have a bike</label><br></br>
  <input type="checkbox" id="vehicle2" name="vehicle1" checked={fullName.vehicle1} onChange={checkedSubmit}/>
  <label for="vehicle2"> I have a car</label><br></br>
  <select class="form-select" name="dropdown" value={fullName.dropdown} onChange={inputEvent}>
  <option >----state----</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
</select> <br /> <br />
 {drop?<p>Plese select option</p>:''}
 <button type="submit" className="btn btn-primary">Submit</button>
  </div>

 
 
</form>

            </div>
        </>
    )
}
export default  SignUp
