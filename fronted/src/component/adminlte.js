// import React from "react";
// import { useState } from 'react';
// import '../component/css/adminlte.css'
// // import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import { Link } from "react-router-dom";
// // import Add_course from "./Course";

// function Adminlte(){
//     const [show, setShow] = useState(false);
  
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
    
//     return (
//         <>
//       <Button  variant="primary" onClick={handleShow}>
//         Launch
//       </Button>

//       <Offcanvas show={show} onHide={handleClose}>
 
//         <Offcanvas.Title><img className="image" src={require(`../img/admin.webp`)}></img></Offcanvas.Title>

//           <Link to="/addcourse"><Button className="mt-2 w-100 ">Add Course</Button></Link>
//           <Link to="/view"><Button className="mt-2 w-100">view course</Button></Link>
//       </Offcanvas>
  
//     </>
//   );
// }

// export default Adminlte;