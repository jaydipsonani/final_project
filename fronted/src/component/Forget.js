import React, {useState} from "react";
import axios from "axios";
import '../component/css/forget.css'
import { Link } from "react-router-dom";
// import { forget_password } from "../../../backend/controller/usercontroller";

function Forget(){

  let [authmode, setauthmode] = useState("otp")
  let [forget_password, setForget_password] = useState('')

  const changeAuthMode = () => {
    setauthmode(authmode === "otp" ? "c_otp":"otp")

    if(authmode === "c_otp") {
      setauthmode(authmode === "c_otp" ? "new-otp" : "otp")

  }
}

const btnHandler=() => {
  axios.post('http://localhost:5000/forget_password',{
    forget_password: forget_password
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })

}

console.log(authmode);

  if(authmode === "otp"){

  return(
    <>
    <div className="Auth-form-container main">
    <div className="Auth-form">
    <div className="Auth-form-content">
      <h3 className="Auth-form-title">forget password</h3>
      <div className="form-group mt-3">
        <label>enter email address</label>
        <input
          type="email"
          onChange={(e) => setForget_password(e.target.value)}
          className="form-control mt-1"
          placeholder="Enter email"
        />
      </div>
  
      <div className="d-grid gap-2 mt-3">
        <button type="submit" className="btn btn-primary" onClick={btnHandler}>
          Submit
        </button>
      
      </div>
    </div>
  </div>
  </div>
    </>
  )
  }

  if(authmode === "new-otp"){

    return(
      <>
      <div className="Auth-form-container main">
      <div className="Auth-form">
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">change password</h3>
        <div className="form-group mt-3">
          <label>Enter new password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="enter password"
          />
        </div>
        <div className="form-group mt-3">
          <label>repeat password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="repeat password"
          />
        </div>
    
        <div className="d-grid gap-2 mt-3 btn">
          {/* <button type="submit" className="btn btn-primary"> */}
          <Link to="/login" className="btn btn-primary" >Submit</Link>
          {/* </button> */}
        
        </div>
      </div>
    </div>
    </div>
      </>
    )

  }

  return(
      <>
      <div className="Auth-form-container main">
    <div className="Auth-form">
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Enter Otp</h3>
        <div className="form-group mt-3">
          <label>Confirm otp</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Enter otp"
          />
        </div>

        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary" onClick={changeAuthMode}>
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
      </>
  )


//  const btnhandler=() => {
//    axios.post('http://localhost:5000/forget_password',{
//      forget_password: forget_password
//    })
//    .then(function (response) {
//      console.log(response.data);
//    })
//    .catch(function (error) {
//      console.log(error);
//    })

//  }

//   return(
//     <>
//     <input type="email" onChange={(e) => {setForget_password(e.target.value)}}/>
//     <button onClick={btnhandler}>submit</button>
//     </>

//   )

  }

export default Forget