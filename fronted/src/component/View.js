import { React } from "react";
// import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import './css/viewcourse.css';
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function View_course() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/course/')
            .then(function (response) {
                setData(response.data.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    })

    return (
        <>
            <div className="bg-white">
            <div className=' '>
                    <div className='d-flex justify-content-around'>
                        <h3 className='pt-3 text-center fw-bold mx-auto'>Course Data </h3>
                        <Link to="/Dashboard" className=' pt-3 me-5'>
                            <Button className='text-start btn btn-dark text-center'>
                                <span className='fw-bold'>Dashboard</span>
                            </Button>
                        </Link>
                    </div>
                </div>
                <form method="get">
                    <table width="100%" align="center" border="1">
                        <thead>
                            <tr>
                                <th>course name</th>
                                <th>course fee</th>
                                <th>Remove Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {
                                    data.map((user, id) => {
                                        return <> <td>{user.c_name}</td>
                                            <td>{user.content_id.content}</td>
                                            <td>{user.content_id.course_fee}</td>
                                        </>
                                    })
                                }
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    )
}

export default View_course