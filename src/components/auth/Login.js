import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AlertContext from "../../context/alert/alertContext";
import { useAuth, clearErrors, login } from "../../context/auth/AuthState";
import "./style.css"

const Login = () => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const [authState, authDispatch] = useAuth();
  const { error, isAuthenticated } = authState;

  useEffect(() => {
    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      clearErrors(authDispatch);
    }
  }, [error, isAuthenticated, authDispatch, setAlert]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill in all fields", "danger");
    } else {
      login(authDispatch, {
        email,
        password,
      });
    }
  };
  if (isAuthenticated) return <Navigate to="/" />;

  return (

 <div className="sideform">
        
        <div className="quote">
                <div class="Iam">


                    <b>
                        <div class="innerIam">
                        
                           <h3 style={{color:"cyan",fontSize:"2.1rem"}} >EVEN NOISES CAN GIVE</h3>
                           <h3 style={{color:"#02ff02",fontSize:"2.1rem"}} >  YOU MEMORIES IF  </h3>
                           <h3 style={{color:"yellow",fontSize:"2.1rem"}} >IF IT IS LONG  </h3> 
                           <h3 style={{color:"#228fff",fontSize:"2.1rem"}} > CONFERENCE CALL WITH   </h3>
                           <h3 style={{color:"#ff1ac3",fontSize:"2.1rem"}} >  YOUR  BEST FRIENDS </h3>
                    
                        
                        </div>
                    </b>

                </div>
            </div>




            
    <div className="form-container1">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group1">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group1">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            autoComplete="on"
            onChange={onChange}
            required
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>

  </div>
  );
};

export default Login;
