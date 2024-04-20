import { React, useState } from "react";
import { Link } from "react-router-dom";
import './css/course.css'
import Sidebar from "./Sidebar";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Faculty() {

  const navigate = useNavigate(' ')

  let [faculty_name, setFaculty_name] = useState('');
  let [faculty_department, setFaculty_department] = useState('');
  let [time, setTime] = useState('');

  const btnHandler = () => {
    axios.post('http://localhost:5000/faculty/addfaculty', {

      faculty_name: faculty_name,
      faculty_department: faculty_department,
      time: time
    })

      .then(function (response) {
        console.log(response.data);

        if (response.data.status === "success") {
          navigate("/Dashboard");
        }

      })
      .catch(function (error) {
        console.log(error);
      })
  }

  return (
    <>
      <Sidebar />
      <div className="Auth-form-container main">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">add faculty</h3>
            <div className="form-group mt-3">
              <label>enter faculty name</label>
              <input
                type="string"
                className="form-control mt-1"
                placeholder="Enter course name"
                onChange={(e) => { setFaculty_name(e.target.value) }}
              />
            </div>
            <div className="form-group mt-3">
              <label>department</label>
              <input
                type="integer"
                className="form-control mt-1"
                placeholder="department"
                onChange={(e) => { setFaculty_department(e.target.value) }}
              />
            </div>

            <div className="form-group mt-3">
              <label>Time</label>
              <select id="time" className="form-control" onChange={(e) => { setTime(e.target.value) }}>
                <option value="Half Time">Half Time</option>
                <option value="Full Time">Full Time</option>
              </select>
            </div>

            <div className="d-grid gap-2 mt-3">

              <Link className='btn btn-primary' onClick={btnHandler}>Submit</Link>
              {/* </button> */}
            </div>
          </div>
        </form>
      </div>

    </>
  )
}

export default Faculty;
