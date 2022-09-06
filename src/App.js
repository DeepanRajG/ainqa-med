import React from "react";
import {  Routes, Route } from "react-router-dom";

import Login from "./script/Login";
import Forgot from "./script/Forgot";
import Landing from "./script/Landing";
import Confirm from "./script/Confirm";
import NewRegistration from "./script/newregistration"

const App = () => {
  return (
    <div className="app">
    <Routes> 


      <Route path="/forgot" element={<Forgot/>} />
      <Route path="*" element={<Login/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/forgotpassword" element={<Forgot/>}/>
      <Route path="/landing" element={<Landing/>}/>
      <Route path="/Confirm" element={<Confirm/>}/>
      <Route path="/newRegestration" element={<NewRegistration/>}/>
      <Route path="/passwordreset/:resetToken" element={<Forgot/>}/>
    </Routes>
  </div>
  );
};

export default App;


