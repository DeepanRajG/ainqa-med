import React from 'react'
import { Header } from 'semantic-ui-react';
import'../css/newregistration.css'
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
export const newregistration = () => {
  return (
    <div id="back">
        <header id="hed">
            <p id="p1">QUICK REGISTRATION</p>
            <div id="cl">
            <p id="cel">30°c</p> 
            <p id="cv">Cloudy</p>
            <div id="rec">
           </div>
            </div>
             </header>
             <div id="pt">
              <p id="text">Patient ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</p>
              <div id="ct">2467890</div>
              </div>
              <div id="ot"></div>
              <p id="tect">MRN ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</p>
              <div id="dv">2435392</div>
              <p id="nam">Patient Name</p>
              <input type="text" id="add" placeholder="Vijay Kumar"></input>
              <p id="ag">Age</p>
              <div id="age">
      <select id="years">
        <option value=" years">42years</option>
        <option value="years">43years</option>
        <option value="years">44years</option>
      </select>
      
      <select id="value">
        <option value="months">2months</option>
        <option value="months">3months</option>
        <option value="months">4months</option>
      </select></div>
<p id="ag">Gender </p>
     <Row id="container">
      <Col id="container1">Male </Col>
      <Col id="container1">Female</Col>
      <Col id="container1">Others</Col>
      </Row>
      <Col>
      <p id="ag">Height</p>
      <input type="text" id="het"></input>
      <select id="value">
        <option value="height">cm</option>
        <option value="height">inches</option>
        </select> 
        </Col> 
        <Col>
        <p id="ag">Weight</p>
      <input type="text" id="het"></input>
    </Col>
    <p id="ag">Blood Group</p>
        <Col>
        <select id="bg">
        <option value="BG">B+ve</option>
        <option value="BG">O+ve</option>
        <option value="BG">A+ve</option>
        <option value="BG">AB+ve</option>
        <option value="BG">A-ve</option>
        <option value="BG">B-ve</option>
        <option value="BG">AB-ve</option>
        </select>
        </Col>
        <button className="button1">Edit</button>
        <button className="button2" >Save</button>
        <button className="button3" >Submit</button>
        


      
     
 
    </div>
  )
}
export default newregistration;
