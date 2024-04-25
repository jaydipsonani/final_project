import { useState, useEffect } from "react";
import '../component/css/viewstudent.css'
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Viewstudent() {
    const [data, setData] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:5000/student')
            .then(res => setData(res.data.data))
            .catch(function (error) {
                console.log(error);
            })

    }, []);

    var handledelete = (id, e) => {

        axios.post(`http://localhost:5000/student/delete/` + id)
            .then((res) => {

                console.log(res);
                const d = data.filter(item => item._id !== id);
                setData(d)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }

    return (

        <div className="bg-white">
            <div className=' '>
                <div className='d-flex justify-content-around'>
                    <h3 className='pt-3 text-center fw-bold mx-auto'>student Data </h3>
                    <Link to="/Dashboard" className=' pt-3 me-5'>
                        <Button className='text-start btn btn-dark text-center'>
                            <span className='fw-bold'>Dashboard</span>
                        </Button>
                    </Link>
                </div>
            </div>
            <div>
                <table id='users' className='table' border='1px solid black'>
                    <thead>
                        <tr className='p-2'>
                            {/* <th>Image</th> */}
                            <th>Name</th>
                            <th>Surname</th>
                            <th>FaherName</th>
                            <th>Dob.</th>
                            <th>Gender</th>
                            <th>Mobile No.</th>
                            <th>Father No.</th>
                            <th>Address</th>
                            <th>Qualification</th>
                            <th>Course name</th>
                            <th>Course Start Date</th>
                            <th>PC / Laptop</th>
                            <th>Remove Data</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data.map((user, index) => {
                                return <tr>
                                    <td>{user.name}</td>
                                    <td>{user.surname}</td>
                                    <td>{user.lastname}</td>
                                    <td>{user.dob}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.contact_number}</td>
                                    <td>{user.father_contactnumber}</td>
                                    <td>{user.address}</td>
                                    <td>{user.qualification}</td>
                                    <td>{user.c_name}</td>
                                    <td>{user.course_start_date}</td>
                                    <td>{user.pc_laptop}</td>
                                    <td><Button onClick={(e) => handledelete(user._id, e)}>Delete</Button></td>

                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Viewstudent
