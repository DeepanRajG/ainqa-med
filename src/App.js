import React from "react";
import {  Routes, Route } from "react-router-dom";

import Login from "./script/Login";
import Forgot from "./script/Forgot";
import Landing from "./script/Landing"

const App = () => {
  return (
    <div className="app">
    <Routes> 


      <Route path="/forgot" element={<Forgot/>} />
      <Route path="*" element={<Login/>} />
      <Route path="/forgotpassword" element={<Forgot/>}/>
      <Route path="/landing" element={<Landing/>}/>
      <Route path="/passwordreset/:resetToken" element={<Forgot/>}/>
    </Routes>
  </div>
  );
};

export default App;


