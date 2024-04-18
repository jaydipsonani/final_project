import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './component/login';
import Home from './component/Home';
import Forget from './component/Forget';
// import Adminlte from './component/adminlte';
import Course from './component/Course';
import View from './component/View';
import Dashboard from './component/Dashboard';
import Sidebar from './component/Sidebar';
import Admission from './component/Admission';
import Faculty from './component/faculty';

function App() {
  return (
    <div className="App main">
      
        <Routes>
          <Route path='/signup' element={<Home/>} ></Route>
          <Route path='/' element={<Login/>} ></Route>
          <Route path='/forget' element={<Forget/>} ></Route>
          <Route path='/addcourse' element={<Course/>}></Route>
          <Route path='/view' element={<View/>}></Route>
          <Route path='/Dashboard' element={<Dashboard/>}></Route>
          <Route path='/Sidebar' element={<Sidebar/>}></Route> 
          <Route path='/Admission' element={<Admission/>}></Route>
          <Route path='/faculty' element={<Faculty/>}></Route>

        </Routes>
      
    </div>
  );
}

export default App;