import React from "react";
import {  Routes, Route } from "react-router-dom";

import Login from "./script/Login";
import Forgot from "./script/Forgot";

import Landing from "./script/Landing"
import  Newregistration  from "./script/newregistration";

import Reset from "./script/Reset"
import Confirm from './script/Confirm'


const App = () => {
  return (
    <div className="app">
    <Routes> 
      <Route path="/ainqa-med/forgot" element={<Forgot/>} />
      <Route path="*" element={<Login/>} />
      <Route path="/ainqa-med/login" element={<Login/>} />
      <Route path="/ainqa-med/forgotpassword" element={<Forgot/>}/>
      <Route path="/ainqa-med/landing" element={<Landing/>}/>

      <Route path="/ainqa-med/Newregistration" element={<Newregistration/>}/>

      <Route path="/ainqa-med/reset" element={<Reset/>}/>
      <Route path="/ainqa-med/confirm" element={<Confirm/>}/>
      <Route path="/ainqa-med/newRegestration" element={<Newregistration/>}/>

     

      <Route path="/passwordreset/:resetToken" element={<Forgot/>}/>
    </Routes>
  </div>
  );
};

export default App;


