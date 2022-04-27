
import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';


const Login = ()=> {

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({phonenumber: "", password: ""});

  const onChange = (event)=>{
    setCredentials({...credentials, [event.target.name]: event.target.value});
  }

  const handelLogin = async(event)=>{
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({phonenumber: credentials.phonenumber, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/");
        }
        else{
            alert("Invalid credentials");
        }
  }


  return (
    <div className= "container" style = {{width: "80%"}}>
      <form onSubmit = {handelLogin}>
        <div className="mb-3">
          <label for="exampleFormControlInput2" className="form-label">Phone Number</label>
          <input name = "phonenumber" onChange = {onChange} type="tel" className="form-control" id="exampleFormControlInput2" placeholder="1234567890" maxlength="10" minlength = "10" required/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput3" className="form-label">Passowrd</label>
          <input name = "password" onChange = {onChange} type="password" className="form-control" id="exampleFormControlInput3" placeholder="enter your password" required/>
        </div>
        <button className= "btn btn-lg btn-primary">Login</button>
      </form>
    </div>
  )
}


export default Login;
