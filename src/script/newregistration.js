import '../css/newregis.css';
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toggle from 'react-styled-toggle';



function App() {
    const navigate = useNavigate();
    const func = () => {
        var e = document.getElementById("selectopt");
        
        var value = e.value;
        var text = e.options[e.selectedIndex].text;
        console.log(text)
        if(text=="Log Out"){
            let path = '/ainqa-med/login';
            navigate(path);
        }
    }
    const confir = () => {

      let path = '/ainqa-med/Confirm';
      navigate(path);
  }



    return (
        <div className='back'>
            <header id="header0">
                <Row id="hd">
                    <Col> <p id="quick"> QUICK REGISTRATION</p></Col>


                    <div id="wether"></div>
                    <p id="p1">30 clody</p>
                    <div id='line'></div>
                    <div id="settings"></div>
                    <div id="join"></div>
                    <div id="noti"></div>
                    <form id="para">
                    <select  id='selectopt'  onChange={func} value='' >
                  
                    <option  hidden >Jennifer Jo</option>
                        <option value='profile'>Profile</option>
                        <option value='settings' >Settings</option>
                        <option value='logout'  >Log Out</option>
                        
                    </select>
                    <p id="position">Paramedic</p>
                    </form>
                    <div id='line'></div>
                    <div id="profile" ></div>

                    
   







                </Row>


            </header>

            <div id="pt">
              <p id="text">Patient ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</p>
              <input id="ct"></input>
              </div>
              <div id="ot"></div>
              <p id="tect">MRN ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</p>
              <div id="dv">2435392</div>
              <p id="nam">Patient Name</p>
              <input type="text" id="add" placeholder="Enter patient name"></input>
              <p id="ag">Age</p>
              <div id="age">
      <select id="value" defaultValue={"DEFAULT"}>
      <option value="DEFAULT" hidden>Years </option>
        <option value="years">1years</option>
        <option value="years">2years</option>
        <option value="years">3years</option>
        <option value="years">4years</option>
        <option value="years">5years</option>
        <option value="years">6years</option>
        <option value="years">7years</option>
        <option value="years">8years</option>
        <option value="years">9years</option>
        <option value="years">10years</option>
        <option value="years">11years</option>
        <option value="years">12years</option>
        <option value="years">13years</option>
        <option value="years">14years</option>
        <option value="years">15years</option>
        <option value="years">16years</option>
        <option value="years">17years</option>
        <option value="years">18years</option>
        <option value="years">19years</option>
        <option value="years">20years</option>
        <option value="years">21years</option>
        <option value="years">22years</option>
        <option value="years">23years</option>
        <option value="years">24years</option>
        <option value="years">25years</option>
        <option value="years">26years</option>
        <option value="years">27years</option>
        <option value="years">28years</option>
        <option value="years">29years</option>
        <option value="years">30years</option>
        <option value="years">31years</option>
        <option value="years">32years</option>
        <option value="years">33years</option>
        <option value="years">34years</option>
        <option value="years">35years</option>
        <option value="years">36years</option>
        <option value="years">37years</option>
        <option value="years">38years</option>
        <option value="years">39years</option>
        <option value="years">40years</option>
        <option value="years">41years</option>
        <option value="years">42years</option>
        <option value="years">43years</option>
        <option value="years">44years</option>
        <option value="years">45years</option>
        <option value="years">46years</option>
        <option value="years">47years</option>
        <option value="years">48years</option>
        <option value="years">49years</option>
        <option value="years">50years</option>
        <option value="years">51years</option>
        <option value="years">52years</option>
        <option value="years">53years</option>
        <option value="years">54years</option>
        <option value="years">55years</option>
        <option value="years">56years</option>
        <option value="years">57years</option>
        <option value="years">58years</option>
        <option value="years">59years</option>
        <option value="years">60years</option>
        <option value="years">61years</option>
        <option value="years">62years</option>
        <option value="years">63years</option>
        <option value="years">64years</option>
        <option value="years">65years</option>
        <option value="years">66years</option>
        <option value="years">67years</option>
        <option value="years">68years</option>
        <option value="years">69years</option>
        <option value="years">70years</option>
        <option value="years">71years</option>
        <option value="years">72years</option>
        <option value="years">73years</option>
        <option value="years">74years</option>
        <option value="years">75years</option>
        <option value="years">76years</option>
        <option value="years">77years</option>
        <option value="years">78years</option>
        <option value="years">79years</option>
        <option value="years">80years</option>
        <option value="years">81years</option>
        <option value="years">82years</option>
        <option value="years">83years</option>
        <option value="years">84years</option>
        <option value="years">85years</option>
        <option value="years">86years</option>
        <option value="years">87years</option>
        <option value="years">88years</option>
        <option value="years">89years</option>
        <option value="years">90years</option>
        <option value="years">91years</option>
        <option value="years">92years</option>
        <option value="years">93years</option>
        <option value="years">94years</option>
        <option value="years">95years</option>
        <option value="years">96years</option>
        <option value="years">97years</option>
        <option value="years">98years</option>
        <option value="years">99years</option>
        <option value="years">100years</option>
      </select>
      
      <select id="value" defaultValue={"DEFAULT"}>
      <option value="DEFAULT" hidden>Months</option>
        <option value="months">1months</option>
        <option value="months">2months</option>
        <option value="months">3months</option>
        <option value="months">4months</option>
        <option value="months">5months</option>
        <option value="months">6months</option>
        <option value="months">7months</option>
        <option value="months">8months</option>
        <option value="months">9months</option>
        <option value="months">10months</option>
        <option value="months">11months</option>
    
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
        <button className="button3"  onClick={confir}>Submit</button>

       
        <div id="box">
        
 <div id="human"></div>
          <Col id="box2"><p id="app">+ Add Patient Photo</p></Col>
         </div>
         <div id="boxx">
         <div id="location"></div>
          <Col id="box3"><p id="loc">+ Add More Images</p></Col>
         </div>
         <button className="button4" >Add Location</button>
         

 
 
  <div id="finger1"></div>
        <div id="retina"></div>
      
  <div id="toggle"><Toggle backgroundColorChecked='#001c3c;' backgroundColorUnchecked='grey'
     sliderHeight={15} sliderWidth={15}  width={50} height={24}>
      
    
    </Toggle></div>
     
    <p id="qvip">VIP</p>    
        
</div>
    );
}
export default App;