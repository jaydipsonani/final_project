import { React } from "react";
// import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import './css/viewcourse.css';
import axios from "axios";
import { Button } from "react-bootstrap";

function View_course() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/course')
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
                <h1 align="center" >view course</h1>
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
                                            <td>{user.course_fee}</td>
                                            <td><Button>delete</Button></td>
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