import "./Login.css";
import React from "react";
import {Link} from "react-router-dom";
let styles ={backgroundColor:"red"};

function Login(){

    return(
        <div>
         <form className="login">
          <h3>Login Now</h3>
          <div>
          <input type="text" placeholder="username"  />
          </div>
          <div>
            <input type="password" placeholder="Password"  />
          </div>
          <div>
            <Link to="title"><button type="submit">Submit</button></Link>
          </div>
          <div>
            <h4>Forget password? SignUp</h4>
          </div>
          
          <Link to="/signup"><button  style={styles}>Signup</button></Link>
        </form>
        </div>
    );
}

export default Login






