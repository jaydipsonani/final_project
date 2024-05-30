import React, { useState } from 'react'
import { Form, Button, Collapse } from 'react-bootstrap'
import { AiOutlineSearch, AiFillFile } from "react-icons/ai";
import './css/sidebar.css'
import { FaTachometerAlt, FaChartPie, FaTree, FaFile } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiTable } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <>
      {/* <Dashboard/> */}
      <div className='sidebar_scroll '>
        <ul className='bgcolorsidebar list-unstyled'>
          {/* ------------Logo-------------- */}
          <li className='border-bottom pt-2 pb-2'>
            <img src={require('../img/AdminLTELogo.png')} width='30px' /><span> <Link to='/Dashboard'>AdminLTE 3</Link></span>
          </li>
          {/* ------------Logo 2------------- */}
          <li className='border-bottom pt-3 pb-3'>
            <Link to="/Dashboard"><img className=' rounded-square' src={require('../img/user2.jpg')} width='30px' /><span className='ms-2'>Alexander Pierce</span></Link>
          </li>
          {/* ------------search------------- */}
          <li className='p-2'>
            <Form className="d-flex">
              <Form.Control
                type="search outline-secondary"
                placeholder="Search"
                className=""
                aria-label="Search"
              />
              <Button className='bg-dark'><AiOutlineSearch className='text-white fs-4 fw-bold '></AiOutlineSearch></Button>
            </Form>
          </li>

          <li>
            <Button
              onClick={() => setOpen1(!open1)}
              variant="outline-secondary"
              aria-controls='example-collapse-text'
              aria-expanded={open1} className='text-start color layout btn1' >

              <span className=''><FaChartPie className='me-3 fs-5' ></FaChartPie>faculty<MdKeyboardArrowDown className=''></MdKeyboardArrowDown></span>
            </Button>
            <Collapse in={open1}>
              <ul id='example-collapse-text' className='list-unstyled ps-0 text-start'>
              <li><Link to='/faculty'><BsCircle className='me-3 fs-6'></BsCircle>Add faculty</Link></li>
              <li><Link to='/viewfaculty'><BsCircle className='me-3 fs-6'></BsCircle>view faculty</Link></li>
              </ul>
            </Collapse>
          </li>

          <li>
            <Button
              onClick={() => setOpen2(!open2)}
              variant="outline-secondary"
              aria-controls='example-collapse-text'
              aria-expanded={open2} className='text-start colorlayout btn1' >

              <span className=''><FaFile className='me-3 fs-5'></FaFile>course<MdKeyboardArrowDown className=''></MdKeyboardArrowDown></span>
            </Button>
            <Collapse in={open2}>
              <ul id='example-collapse-text' className='list-unstyled ps-0 text-start'>
                <li><Link to='/addcourse'><BsCircle className='me-3 fs-6'></BsCircle>Add Course</Link></li>
                <li><Link to='/view'><BsCircle className='me-3 fs-6'></BsCircle>View Course</Link></li>
              </ul>
            </Collapse>
          </li>
          {/* ------------tables------------- */}
          <li>
            <Button
              onClick={() => setOpen3(!open3)}
              variant="outline-secondary"
              aria-controls='example-collapse-text'
              aria-expanded={open3} className='text-start colorlayout btn1' >

              <span className='outline-light'><HiTable className='me-3 fs-5' ></HiTable>student<MdKeyboardArrowDown className=''></MdKeyboardArrowDown></span>
            </Button>
            <Collapse in={open3}>
              <ul id='example-collapse-text' className='list-unstyled ps-0 text-start'>
                <li><Link to='/Admission'><BsCircle className='me-3 fs-6'></BsCircle>Admission</Link></li>
                <li><Link to='/viewstudent'><BsCircle className='me-3 fs-6'></BsCircle>view_student</Link></li>
              </ul>
            </Collapse>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
