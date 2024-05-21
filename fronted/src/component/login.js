import React, { useState } from 'react'
import '../component/css/login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {

  const navigate = useNavigate(' ')

  let [email, setemail] = useState('');
  let [password, setpassword] = useState('');
  let [type, setType] = useState('password')
  let [error, setError] = useState('');

  const show = () => {
    type === "password" ? setType("text") : setType("password");
  }

  const btnhandler = () => {
    axios.post('http://localhost:5000/login', {
      email: email,
      password: password
    })

      .then(function (response) {
        console.log(response.data);

        if (response.data.status === "success") {
          navigate("/Dashboard");
        }
        if (response.data.status === "user not found") {
          setError(response.data.status);
          alert("user not found")
        }
        if (response.data.status === "check_password") {
          setError(response.data.status);
          // <h1>check your password</h1>
          alert("check your password")
        }
        if (response.data.status === "user already logged in") {
          alert("user already logged in ")
        }
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  return (
    <>

      <div className="Auth-form-container">
        <div className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>

              <input
                type="email"
                onChange={(e) => { setemail(e.target.value) }}
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type={type}
                onChange={(e) => { setpassword(e.target.value) }}
                className="form-control mt-1"
                placeholder="Enter password"
              />

              <input className='input' onClick={show} type='checkbox'/> show password

            </div>
            <div className="d-grid gap-2 mt-3">
              <div className='btn btn-primary' onClick={btnhandler} >Submit</div>
            </div>
            <p className='mt-3'><a href='#'><Link to="/signup">you don't have any account?</Link></a></p>
            <p className="forgot-password text-right mt-2">
              <a href="#"><Link to="/forget">Forgot password?</Link></a>
            </p>
          </div>
        </div>
      </div>


    </>
  );
}

export default Login