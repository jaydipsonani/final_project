import {React, useState} from "react";
// import { Link } from "react-router-dom";
import './css/viewcourse.css';

function view_course(){

    return(
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
                    <td>fronted</td>
                    <td>12000</td>
                    <td><button>delete</button></td>
                </tr>

                </tbody>
            </table>
        </form>
            </div>
        </>
    )
}

export default view_course