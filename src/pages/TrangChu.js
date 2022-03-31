
import React, { useState } from "react";

function LoginFrom ({ Login, error }) {
  const [details,setDetails] = useState( {name:"", email:"", password:""})
    const submitHandler = e =>{
      e.preventDefault();
    Login(details);
    }
    return(
       <form onSubmit={submitHandler}>
           <div
               className = "form-inner">
                    <h2>Login</h2>
                    {/* Error! */}
                    <div className="container">
                        <div 
                            className = "form-group">
                                <label className=" name">Name: </label>
                                <input type="text" name ="name" id = "name" onChange={e => setDetails({...details, name:e.target.value})} value={details.name} />
                        </div>
                        <div
                            className = "form-group">
                            <label className="Email">Email</label>
                            <input type= "Email" name = "Email" id = "Email" onChange={e => setDetails({...details, Email:e.target.value})} value={details.Email} /> 
                        </div>
                        <div
                            className = "form-group">
                            <label className="Passwrod">Password: </label>
                            <input type= "Password" name= "Password" id= "Password " onChange={e => setDetails({...details, Password:e.target.value})} value={details.Password}/>
                        </div>
                        <button type= "submit" value="Login">Login</button>
                    </div>
           </div>
       </form>
    )
}

export default LoginFrom;