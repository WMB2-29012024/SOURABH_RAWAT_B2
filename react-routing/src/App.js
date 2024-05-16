import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import { Link } from 'react-router-dom'
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Project from './pages/Project.jsx';
import Course from './pages/Course.jsx';
import NotFound from './pages/NotFound.jsx';
import CourseList from './pages/CourseList.jsx';

function App() {
  return (
    <div className="App">
      <nav className='navbar'>
        <h2 className='logo'>Logo</h2>
        <ul className='lists'>
          <li className='list'>
            <Link to="/home">
              HOME
            </Link>
          </li>
          <li className='list'>
            <Link to="/about">
              ABOUT
            </Link>
          </li>
          <li className='list'>
            <Link to="/project">
              PROJECT
            </Link>
          </li>
          <li className='list'>
            <Link to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Navigate to='/' />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/project' element={<Project />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        {/* <Route path='/course/:coursename' element={<Course />}></Route> */}
        <Route path='*' element={<NotFound />}></Route>
        <Route path='/course' element={<Course />}>
          <Route path='list' element={<CourseList />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
