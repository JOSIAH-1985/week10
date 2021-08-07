import logo from './logo.svg';
import './App.css';
import home from './component/home'
import about from './component/about'
import contact from './component/contact'
import login from './component/login'
import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <div className="nav-container">

           <nav>
           <Link style={styleLink}to="/">HOME</Link>
      <Link style={styleLink}to="/">ABOUT</Link>
      <Link style={styleLink}to="/">CONTACT</Link>
      <Link style={styleLink}to="/">LOGIN</Link>
    </nav>
      
      </div>
    <div>
    <switch>
      
 <div className="content" >
     <Route path="/" >
       <home/>
       </Route>
     <Route path="/about">
     <about/>
     </Route>
     <Route path="/contact">
       <contact/>
       </Route>
     <Route path="/login">
       <login/>
       </Route>
     </div>

    </switch>
    

   </div>
    </div>
  );
}




export default App;