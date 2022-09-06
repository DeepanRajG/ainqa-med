import React from "react";
import {  Routes, Route } from "react-router-dom";

import Login from "./script/Login";
import Forgot from "./script/Forgot";

import Landing from "./script/Landing"
import  Newregistration  from "./script/newregistration";
import Landing from "./script/Landing";
import NewRegistration from "./script/newregistration"
import Reset from "./script/Reset"


const App = () => {
  return (
    <div className="app">
    <Routes> 
      <Route path="/forgot" element={<Forgot/>} />
      <Route path="*" element={<Login/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/forgotpassword" element={<Forgot/>}/>
      <Route path="/landing" element={<Landing/>}/>

      <Route path="/Newregistration" element={<Newregistration/>}/>

      <Route path="/reset" element={<Reset/>}/>
      <Route path="/newRegestration" element={<NewRegistration/>}/>

      <Route path="/passwordreset/:resetToken" element={<Forgot/>}/>
    </Routes>
  </div>
  );
};

export default App;


