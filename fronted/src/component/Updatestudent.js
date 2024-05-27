import React, { useEffect } from "react"
import '../component/css/updatestudent.css'
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Updatestudent() {

    const navigate = useNavigate();
    const id = useParams();
    console.log(id);

    let [data, setData] = useState({})
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
    let [error, setError] = useState('')

    // useEffect(() => {
    //     axios.get('http://localhost:5000/student/update/' + id.id)
    //         .then(res => {
    //             setData(res.data.data)
    //             const {data} = res.data;

    //             setName(data.data.name)
    //             setSurname(data.data.surname)
    //             setLastname(data.data.lastname)
    //             setGender(data.data.gender)
    //             setDob(data.data.dob)
    //             setContact_number(data.data.contact_number)
    //             setFather_contactnumber(data.data.father_contactnumber)
    //             setAddress(data.data.address)
    //             setQualification(data.data.qualification)
    //             setC_name(data.data.c_name)
    //             setCourse_start_date(data.data.course_start_date)
    //             setPc_laptop(data.data.pc_laptop)
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    //     }, [id])
    //     console.log(data)

    const btnupdate = () => {
        axios.post('http://localhost:5000/student/update/' + id.id, {
            name: name,
            surname: surname,
            lastname: lastname,
            dob: dob,
            gender: gender,
            contact_number: contact_number,
            father_contactnumber: father_contactnumber,
            address: address,
            qualification: qualification,
            // image: state.base64URL,
            c_name: c_name,
            course_start_date: course_start_date,
            pc_laptop: pc_laptop

        })
            .then(res => {
                console.log(res.data)
                if (res.data.status === "updated successfully") {
                    setError(res.data.status);
                    navigate('/viewstudent')
                    // return false;
                }

            }).catch(function (error) {
                console.log(error);
                console.log(3);
            })
    }

    return (
        <div className="hello">
            <div className='main_page'>

                <div className="container mt-2 p-2 text-start">
                    <div>
                        <div>
                            <h1 className="d-flex  justify-content-center" >updated Form</h1>
                            <hr className="horizontal"></hr>

                            {/* name */}
                            <div className="form-group mt-3 d-flex gap-3">
                                <label className="col-2 align-content-center">Student Full Name :</label>
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    value={name}
                                    onChange={(e) => { setName(e.target.value) }}
                                    placeholder="Enter name"
                                />
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    value={lastname}
                                    onChange={(e) => { setLastname(e.target.value) }}
                                    placeholder="Enter father Name"
                                />
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    value={surname}
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
                                        value={dob}
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
                                    value={contact_number}
                                    onChange={(e) => { setContact_number(e.target.value) }}
                                    placeholder="Contact Number"
                                />

                                <input
                                    type="text  "
                                    maxLength={10}
                                    className="form-control mt-1"
                                    value={father_contactnumber}
                                    onChange={(e) => { setFather_contactnumber(e.target.value) }}
                                    placeholder="Father Contact Number"
                                />
                            </div>

                            {/* address */}
                            <div className="form-group mt-3 d-flex gap-3">
                                <label className="col-2">Address :</label>
                                <input

                                    className="form-control mt-1"
                                    value={address}
                                    onChange={(e) => { setAddress(e.target.value) }}
                                    placeholder="Enter Your Current Address"
                                />
                            </div>

                            {/* qaulification */}
                            <div className="form-group mt-3 d-flex gap-3">
                                <label className="col-2 ">Qualification :</label>
                                <select id="qaulification" className="form-control" value={qualification} onChange={(e) => { setQualification(e.target.value) }}>
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
                                <select id="course" defaultValue="CCC" className="form-control" value={c_name} onChange={(e) => { setC_name(e.target.value) }}>
                                    <option value={"CCC"}>CCC</option>
                                    <option value={"Front End Development"}>Front End Development</option>
                                    <option value={"Back End Delelopment"} >Back End Development</option>
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
                                        value={course_start_date}
                                        onChange={(e) => { setCourse_start_date(e.target.value) }}
                                    />
                                </div>
                            </div>

                            {/* Pc_laptop */}
                            <div className="form-group mt-3 d-flex gap-5 col-5">
                                <label className="col-4 ">PC & Laptop :</label>
                                <select id="pc_laptop" className="form-control" value={pc_laptop} onChange={(e) => { setPc_laptop(e.target.value) }}>
                                    <option value={"PC"} >PC</option>
                                    <option value={"Laptop"}>Laptop</option>
                                </select>
                            </div>

                            <div className="d-grid gap-2 mt-3 col-2">
                                <button type="submit" className="btn btn-primary" >
                                    <Link onClick={() => btnupdate(id.id)} className='submit'>update</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Updatestudent
