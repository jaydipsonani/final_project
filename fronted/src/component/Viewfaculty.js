import React from "react";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


function ViewFaculty() {

    const [data, setData] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:5000/faculty/')
            // .then((res) => setData(res.data))
            // console.log(res)
            // .catch(function (error) {
            //     console.log(error);
            // })
            .then(function (response) {
                setData(response.data.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const handledelete = (id, e) => {

        alert('delete')
        axios.post(`http://localhost:5000/faculty/delete/` + id)
            .then((res) => {
                console.log(res);
                const d = data.filter(item => item._id !== id);
                setData(d)
            })
            .catch(function (error) {

                console.log(error);
            })

    }

    return (

        <>

            {/* <div className="bg-white">
                <h1 align="center" >view course</h1>
                <form method="get">
                    <table width="100%" align="center" border="1">
                        <thead>
                            <tr >
                                <th>faculty name</th>
                                <th>faculty department</th>
                                <th>faculty time</th>
                                <th>remove</th>
                            </tr>
                        </thead>
                        <tbody width="100%">
                            <tr>
                                {
                                    data.map((user, index) => {
                                <hr />
                                        return <> <td>{user.faculty_name}</td>
                                            <td>{user.faculty_department}</td>
                                            <td>{user.time}</td>
                                            <td class="list-group-item"><Button onClick={(e) => handledelete(user._id, e)}>Delete</Button></td>
                                        </>
                                    })
                                }
                            </tr>

                        </tbody>
                    </table>
                </form>
            </div> */}

            <div className="bg-white">
                <div className=' '>
                    <div className='d-flex justify-content-around'>
                        <h3 className='pt-3 text-center fw-bold mx-auto'>Faculty Data </h3>
                        <Link to="/Dashboard" className=' pt-3 me-5'>
                            <Button className='text-start btn btn-dark text-center'>
                                <span className='fw-bold'>Dashboard</span>
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="container mt-5 ">
                    <div className="row">
            {
                data.map((user, index) => {
                    return <div className="col-4 ">
                        <div class="card w-75 m-1" >
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Name :<span>{user.faculty_name}</span></li>
                                <li class="list-group-item">Dapartment :<span>{user.faculty_department}</span></li>
                                <li class="list-group-item">Time :<span>{user.time}</span></li>
                                <li class="list-group-item"><Button onClick={(e) => handledelete(user._id, e)}>Delete</Button></li>
                            </ul>
                        </div>
                    </div>
                })
            } 
            </div>
                </div>
            </div>
        </>
    )
}

export default ViewFaculty;