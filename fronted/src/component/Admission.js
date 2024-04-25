import { React, useState } from "react";
import './css/admission.css'
// import { Link } from "react-router-dom";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from "./Sidebar";
import Dashboard from './Dashboard';
import { Button } from "react-bootstrap";

function Add_student() {

  const navigate = useNavigate('')

  let [name, setName] = useState('');
  let [surname, setSurname] = useState('');
  let [lastname, setLastname] = useState('');
  let [dob, setDob] = useState('');
  let [gender, setGender] = useState('')
  let [contact_number, setContact_number] = useState('')
  let [father_contactnumber, setFather_contactnumber] = useState('')
  let [address, setAddress] = useState('')
  let [qualification, setQualification] = useState('')
  let [image, setImage] = useState('')
  let [c_name, setC_name] = useState('')
  let [course_start_date, setCourse_start_date] = useState('')
  let [pc_laptop, setPc_laptop] = useState('')

  const btnsubmit = () => {
    axios.post('http://localhost:5000/student/addstudent', {
      name: name,
      surname: surname,
      lastname: lastname,
      dob: dob,
      gender: gender,
      contact_number: contact_number,
      father_contactnumber: father_contactnumber,
      address: address,
      qualification: qualification,
      image: image,
      c_name: c_name,
      course_start_date: course_start_date,
      pc_laptop: pc_laptop
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
      {/* <Sidebar /> */}
      <div className='main_page'>

        <div className="container mt-2 p-2 text-start">
        <Link to="/Dashboard" className='d-flex justify-content-end pb-3  ms-1'>
          <Button className='text-start btn btn-dark text-center' >
            <span className='fw-bold'>Dashboard</span>
          </Button>
        </Link>

          <div>
            <div>
              <h1 className="d-flex justify-content-center" >Admission Form</h1>

              {/* name */}
              <div className="form-group mt-3 d-flex gap-3">
                <label className="col-2 align-content-center">Student Full Name :</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  onChange={(e) => { setName(e.target.value) }}
                  placeholder="Enter name"
                />
                <input
                  type="text"
                  className="form-control mt-1"
                  onChange={(e) => { setLastname(e.target.value) }}
                  placeholder="Enter father Name"
                />
                <input
                  type="text"
                  className="form-control mt-1"
                  onChange={(e) => { setSurname(e.target.value) }}
                  placeholder="Enter Surname"
                />
              </div>

              {/* dob & gender */}
              <div className="form-group mt-3 d-flex gap-3">

                <div className="col-7 d-flex gap-5">
                  <label className="col-3 align-content-center">Date of Birth :</label>
                  <input
                    type="date"
                    className="form-control mt-1"
                    onChange={(e) => { setDob(e.target.value) }}
                  />
                </div>

                <div className="col-5 d-flex gap-3 pe-5">
                  <label className=" align-content-center ms-auto">Gender :</label>
                  <input
                    type="radio"
                    name="gender"
                    value={"Male"}
                    className=" mt-1"
                    onChange={(e) => { setGender(e.target.value) }}
                  />
                  <label className="align-content-center "> Male</label>
                  <input
                    type="radio"
                    name="gender"
                    value={"Female"}
                    className="mt-1"
                    onChange={(e) => { setGender(e.target.value) }}
                  />
                  <label className="align-content-center"> Female</label>
                </div>
              </div>

              {/* number */}
              <div className="form-group mt-3 d-flex gap-3">
                <label className="col-2 align-content-center">Contact Details :</label>
                <input
                  type="text"
                  maxLength={10}
                  className="form-control mt-1"
                  onChange={(e) => { setContact_number(e.target.value) }}
                  placeholder="Contact Number"
                />

                <input
                  type="text  "
                  maxLength={10}
                  className="form-control mt-1"
                  onChange={(e) => { setFather_contactnumber(e.target.value) }}
                  placeholder="Father Contact Number"
                />
              </div>

              {/* address */}
              <div className="form-group mt-3 d-flex gap-3">
                <label className="col-2">Address :</label>
                <input

                  className="form-control mt-1"
                  onChange={(e) => { setAddress(e.target.value) }}
                  placeholder="Enter Your Current Address"
                />
              </div>

              {/* qaulification */}
              <div className="form-group mt-3 d-flex gap-3">
                <label className="col-2 ">Qualification :</label>
                <select id="qaulification" className="form-control" onChange={(e) => { setQualification(e.target.value) }}>
                  <option value={"None"}>None</option>
                  <option value={"S.S.C."}>S.S.C.</option>
                  <option value={"H.S.C."} >H.S.C.</option>
                  <option value={"Post Graduate"}>Post Graduate</option>
                  <option value={"Master Graduate"}>Master Graduate</option>
                </select>
              </div>

              {/* image */}
              <div className="form-group mt-3 d-flex gap-3">
                <label className="col-2 align-content-center">Student Photo  :</label>
                <input
                  type="file"
                  className="form-control mt-1"
                  onChange={(e) => { setImage(e.target.value) }}
                />
              </div>

              {/* Course name */}
              <div className="form-group mt-3 d-flex gap-3">
                <label className="col-2 ">Courses :</label>
                <select id="course" defaultValue="CCC" className="form-control" onChange={(e) => { setC_name(e.target.value) }}>
                  <option value={"CCC"}>CCC</option>
                  <option value={"Front End Development"}>Front End Development</option>
                  <option value={"Back End Delelopment"} >Back End Delelopment</option>
                  <option value={"Flutter"}>Flutter</option>
                  <option value={"Full stack development"}>Full stack development</option>
                </select>
              </div>

              {/* Course start date */}
              <div className="form-group mt-3 d-flex gap-3">

                <div className="col-7 d-flex gap-5">
                  <label className="col-3 align-content-center">Start Date :</label>
                  <input
                    type="date"
                    className="form-control mt-1"
                    onChange={(e) => { setCourse_start_date(e.target.value) }}
                  />
                </div>
              </div>

              {/* Pc_laptop */}
              <div className="form-group mt-3 d-flex gap-5 col-5">
                <label className="col-4 ">PC & Laptop :</label>
                <select id="pc_laptop" className="form-control" onChange={(e) => { setPc_laptop(e.target.value) }}>
                  <option value={"PC"} >PC</option>
                  <option value={"Laptop"}>Laptop</option>
                </select>
              </div>

              <div className="d-grid gap-2 mt-3 col-2">
                <button type="submit" className="btn btn-primary" >
                  <Link onClick={btnsubmit} className='submit'>Submit</Link>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Add_student