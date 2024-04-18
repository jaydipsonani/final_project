import {React, useState} from "react";
import { Link } from "react-router-dom";
import './css/course.css'
import Sidebar from "./Sidebar";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Add_course(){

const navigate = useNavigate(' ')

let [course, setcourse] = useState('');
let [fees, setfees] = useState('');
let [error, setError] = useState('');

const btnhandler=() => {
  axios.post('http://localhost:5000/course/addcourse',{

    c_name:course,
    course_fee:fees
  })
  
  .then(function (response) {
    console.log(response.data);

    if(response.data.status === "succesfully added")
    {
      navigate("/Dashboard");
    }

  })
  .catch(function (error) {
    console.log(error);
  })
}

    return(
        <>
        <Sidebar/>
    <div className="Auth-form-container main">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">add course</h3>
          <div className="form-group mt-3">
            <label>enter course name</label>
            <input
              type="string"
              className="form-control mt-1"
              placeholder="Enter course name"
              onChange={(e) => {setcourse(e.target.value)}}
            />
          </div>
          <div className="form-group mt-3">
            <label>course fee</label>
            <input
              type="integer"
              className="form-control mt-1"
              placeholder="enter fees"
              onChange={(e) => {setfees(e.target.value)}}
            />
          </div>
          
          <div className="d-grid gap-2 mt-3">

              <Link className='btn btn-primary' onClick={btnhandler}>Submit</Link>
            {/* </button> */}
          </div>
        </div>
      </form>
    </div>

        </>
    )
}

export default Add_course;
