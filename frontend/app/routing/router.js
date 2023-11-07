import React from 'react';
import Home from '../home';
import SignUp from '../components/postmethod'
import View from "../components/getmethod "
import Edit from '../components/putmethod'
import Footer from '../components/footer';
import { Route } from 'react-router-dom';

function routing()
{



  return (
    <div className='app'> 
        <Home/>
        <View/>
        <Edit/>
        <SignUp/>\
        <Footer/>


        
    </div>

  )


}

export default routing;