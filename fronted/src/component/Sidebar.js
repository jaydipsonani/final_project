import React, { useState } from 'react'
import { Form, Button, Collapse } from 'react-bootstrap'
import { AiOutlineSearch, AiFillFile } from "react-icons/ai";
import './css/sidebar.css'
import { FaTachometerAlt, FaChartPie, FaTree ,FaFile} from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { HiTable } from "react-icons/hi";
import { Link } from 'react-router-dom';
// import Dashboard from './Dashboard';

const Sidebar = () => {

  const [open, setOpen] = useState(false);
  // const [open1, setOpen1] = useState(false);
  // const [open2, setOpen2] = useState(false);
  // const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

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
          <Link to="/Dashboard"><img className='rounded-circle' src={require('../img/user2.jpg')} width='30px' /><span>Alexander Pierce</span></Link>
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
          {/* ------------Dashboard------------- */}

          <li>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls='example-collapse-text'
              aria-expanded={open} className='text-start btn1' >

              <span className=''><FaTachometerAlt className='me-3 fs-5'></FaTachometerAlt>Dashboard <MdOutlineKeyboardArrowLeft className=''></MdOutlineKeyboardArrowLeft></span>
            </Button>
            <Collapse in={open}>
              <ul id='example-collapse-text' className='list-unstyled ps-0 text-start'>
                <li><Link to='/'><BsCircle className='me-3 fs-6'></BsCircle>Dashboard v1</Link></li>
                <li><Link to='Dashboard_2'><BsCircle className='me-3 fs-6'></BsCircle>Dashboard v2</Link></li>
                <li><Link to='Dashboard_3'><BsCircle className='me-3 fs-6'></BsCircle>Dashboard v3</Link></li>
              </ul>
            </Collapse>
          </li>
          {/* ------------Widgets------------- */}
          {/* <li className='list-unstyled text-start'>
            <Button
              variant="outline-secondary"
              aria-controls='example-collapse-text'
              aria-expanded={open} className='text-start colorlayout btn1' >

              <span className='outline-light'><BsFillGrid3X3GapFill className='me-3 fs-5'></BsFillGrid3X3GapFill>Widgets</span>
            </Button>

          </li> */}

          {/* <li>
            <Button
              onClick={() => setOpen2(!open2)}
              variant="outline-secondary"
              aria-controls='example-collapse-text'
              aria-expanded={open2} className='text-start colorlayout btn1' >

              <span className=''><FaChartPie className='me-3 fs-5' ></FaChartPie>Charts<MdOutlineKeyboardArrowLeft className=''></MdOutlineKeyboardArrowLeft></span>
            </Button>
            <Collapse in={open2}>
              <ul id='example-collapse-text' className='list-unstyled ps-0 text-start'>
                <li><Link to='chart js'><BsCircle className='me-3 fs-6'></BsCircle>Chart JS</Link></li>
                <li><Link to='flot'><BsCircle className='me-3 fs-6'></BsCircle>Flot</Link></li>
                <li><Link to='inline'><BsCircle className='me-3 fs-6'></BsCircle>Inline</Link></li>
                <li><Link to='uploat'><BsCircle className='me-3 fs-6'></BsCircle>uPlot</Link></li>
              </ul>
            </Collapse>
          </li> */}

          <li>
            <Button
              onClick={() => setOpen4(!open4)}
              variant="outline-secondary"
              aria-controls='example-collapse-text'
              aria-expanded={open4} className='text-start colorlayout btn1' >

              <span className=''><FaFile className='me-3 fs-5'></FaFile>Forms<MdOutlineKeyboardArrowLeft className=''></MdOutlineKeyboardArrowLeft></span>
            </Button>
            <Collapse in={open4}>
              <ul id='example-collapse-text' className='list-unstyled ps-0 text-start'>
                <li><Link to='/addcourse'><BsCircle className='me-3 fs-6'></BsCircle>Add Course</Link></li>
                <li><Link to='/view'><BsCircle className='me-3 fs-6'></BsCircle>View Course</Link></li>
                <li><Link to='/Admission'><BsCircle className='me-3 fs-6'></BsCircle>Admission</Link></li>
                <li><Link to='/faculty'><BsCircle className='me-3 fs-6'></BsCircle>Add faculty</Link></li>
                <li><Link ><BsCircle className='me-3 fs-6'></BsCircle>Validation</Link></li>
              </ul>
            </Collapse>
          </li>
          {/* ------------tables------------- */}
          <li>
            <Button
              onClick={() => setOpen5(!open5)}
              variant="outline-secondary"
              aria-controls='example-collapse-text'
              aria-expanded={open5} className='text-start colorlayout btn1' >

              <span className='outline-light'><HiTable className='me-3 fs-5' ></HiTable>Tables<MdOutlineKeyboardArrowLeft className=''></MdOutlineKeyboardArrowLeft></span>
            </Button>
            <Collapse in={open5}>
              <ul id='example-collapse-text' className='list-unstyled ps-0 text-start'>
                <li><Link to='simple tables'><BsCircle className='me-3 fs-6'></BsCircle>Simple Tables</Link></li>
                <li><Link to='datatables'><BsCircle className='me-3 fs-6'></BsCircle>DataTables</Link></li>
                <li><Link to='jsgrid'><BsCircle className='me-3 fs-6'></BsCircle>jsGrid</Link></li>
              </ul>
            </Collapse>
          </li>

        </ul>
      </div>
    </>
  )
}

export default Sidebar
