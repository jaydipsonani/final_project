import React from 'react'
import Card from 'react-bootstrap/Card';
import './css/dashboard.css'
import Sidebar from './Sidebar';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
// import Header from './Header';

const Dashboard = () => {
    const navigate = useNavigate(' ')

    const btnHandler = () => {
        axios.post('http://localhost:5000/logout', {
        })
            .then(function (response) {
                console.log(response.data);
                if (window.confirm('are you sure you want to log out?')) {
                if (response.data.status === "successfully logged out") {
                        navigate("/");
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <>
            <div className='bg-white'>
                <Sidebar />
                {console.log("hello good morning")}
                <div className='dashcol'>
                    <div className='d-flex dashpad space m-3'>
                        <div>
                            <h4>Dashboard</h4>
                        </div>
                        {/* <div className='ms-auto pe-3'>
                    <Link className='ps-3 btn btn-primary text-white' to="/">Log in</Link>
                </div> */}
                        <div className='ms-auto pe-3'>
                            <Link className='ps-3 btn btn-primary text-white' to="/signup">Sign Up</Link>
                        </div>
                        <div>
                            <button className='ps-3 btn btn-primary text-white' onClick={btnHandler} >Logout</button>
                        </div>
                    </div>
                    <div className='dashpad d-flex gap-3 pr-2 m-3 '>
                        <Card style={{ width: '14.5rem' }} className='cardcol1 cardtxtcol'>
                            <Card.Body className='main-card'>
                                <Card.Title className='text-start m-2'><h2 className='fontwe'>150</h2></Card.Title>
                                <Card.Text className='text-start m-2'>
                                    New orders
                                </Card.Text>
                                <Card.Link className='link' href='#'>More info</Card.Link>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '14.5rem' }} className='cardcol2 cardtxtcol'>
                            <Card.Body className='main-card1'>
                                <Card.Title className='text-start m-2'><h2 className='fontwe'>53%</h2></Card.Title>
                                <Card.Text className='text-start m-2'>
                                    Bounce Rate
                                </Card.Text>
                                <Card.Link className='link' href="#">More info</Card.Link>

                            </Card.Body>
                        </Card>

                        <Card style={{ width: '14.5rem' }} className='cardcol3'>
                            <Card.Body className='main-card2'>
                                <Card.Title className='text-start m-2'><h2 className='fontwe'>44</h2></Card.Title>
                                <Card.Text className='text-start m-2'>
                                    User Registrations
                                </Card.Text>
                                {/* <div className='link'> */}
                                <Card.Link className='link' href="#">More info</Card.Link>
                                {/* </div> */}
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '14.5rem' }} className='cardcol4 cardtxtcol'>
                            <Card.Body className='main-card3'>
                                <Card.Title className='text-start m-2'><h2 className='fontwe'>65</h2></Card.Title>
                                <Card.Text className='text-start m-2'>
                                    Unique Visitors
                                </Card.Text>
                                <Card.Link className='link' href="#">More info</Card.Link>

                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard