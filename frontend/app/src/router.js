import React from 'react';
import Home from './components/home';
import SignUp from './components/postmethod';
import View from "./components/getmethod ";
import Edit from './components/putmethod';
import Footer from './components/footer';
import Nav from  './components/navecation';
import About from './components/about';
import Missing  from './components/missing';
import { Link, Route, Routes } from 'react-router-dom';
import './index.css'


function routing()
{



  return (
    <div className='app'> 
      <div>
        
        <ul className='applayout'>
            <h1 className='headding'>Welcome to my App</h1>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signup">SignUp</Link></li>
            <li><Link to="/update">Update</Link></li>
            <li><Link to="/view">Posts</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/footer">footer</Link></li>
            <li><Link to="*"></Link></li>

        </ul>
      </div>



      <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/navecation' element={<Nav/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/view' element={ <View/>}/>
          <Route path='/Update' element={ <Edit/>}/>
          <Route path='/footer' element={ <Footer/>}/>
          <Route path='*' element={ <Missing/>}/>
      </Routes>
        


        
    </div>

  )


}

export default routing;