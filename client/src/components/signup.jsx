import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';


const Signup = ()=> {

  const navigate = useNavigate();

  const [details, setDetails] = useState({
    phonenumber: "",
    password: ""
  });

  const onChange = (event)=>{
    setDetails({...details, [event.target.name]: event.target.value})
  }

  const handelSignup = async (event)=>{
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({phonenumber: details.phonenumber, password: details.password})
        });

    const json = await response.json();
    console.log(json);
    if (json.success){
      localStorage.setItem('token', json.authtoken);
      navigate("/");
  }
  else{
      alert("Invalid credentials");
  }

  }


  return (
    <div className= "container" style = {{width: "80%"}}>
      <form onSubmit = {handelSignup}>
        <div className="mb-3">
          <label for="exampleFormControlInput2" className="form-label">Phone Number</label>
          <input name = "phonenumber" onChange = {onChange} type="tel" className="form-control" id="exampleFormControlInput2" placeholder="1234567890" maxlength="10" minlength = "10" required/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput3" className="form-label">Passowrd</label>
          <input name = "password" onChange = {onChange} type="password" className="form-control" id="exampleFormControlInput3" placeholder="enter your password" required/>
        </div>
        <button className= "btn btn-lg btn-primary">Sign up</button>
      </form>
    </div>
  )
}


export default Signup;
