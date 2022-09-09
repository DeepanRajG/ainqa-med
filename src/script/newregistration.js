import "../css/newregis.css";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toggle from "react-styled-toggle";

function App() {
  const navigate = useNavigate();
  const func = () => {
    var e = document.getElementById("selectopt");

    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    console.log(text);
    if (text == "Log Out") {
      let path = "/ainqa-med/";
      navigate(path);
    }
  };
  const confir = () => {
    let path = "/ainqa-med/Confirm";
    navigate(path);
  };

  return (
    
        <div className="back">
            <header id="header0">
                <Row id="hd">
                <Col>
                    {" "}
                    <p id="quick"> QUICK REGISTRATION</p>
                </Col>

                <div id="wether"></div>
                <p id="p1">30 clody</p>
                <div id="line"></div>
                <div id="settings"></div>
                <div id="join"></div>
                <div id="noti"></div>
                <form id="para">
                    <select id="selectopt" onChange={func} value="">
                        <option hidden>Jennifer Jo</option>
                        <option value="profile">Profile</option>
                        <option value="settings">Settings</option>
                        <option value="logout">Log Out</option>
                    </select>
                    <p id="position">Paramedic</p>
                </form>
                <div id="line"></div>
                <div id="profile"></div>
                </Row>
            </header>

            <div class="container">

                <div id="ot"></div>
                <p id="tect">
                    MRN
                    ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                </p>
                <div id="dv">2435392</div>
                <div>
                    <p id="text">Patient ID </p>

                    <input id="ct"></input>
                </div>
                <div id="don">
                    <p id="nam">Patient Name</p>
                    <input type="text" id="add" placeholder="Enter patient name"></input>
                </div>

                <p id="ag">Age</p>
                <div id="age">
                    <select id="tum" defaultValue={"DEFAULT"}>
                        <option value="DEFAULT" hidden>
                            Years{" "}
                        </option>
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
                        <option value="DEFAULT" hidden>
                            Months
                        </option>
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
                    </select>
                </div>
                <p id="ag">Gender </p>
                <Row id="container">
                    <Col id="container1">Male </Col>
                    <Col id="container1">Female</Col>
                    <Col id="container1">Others</Col>
                </Row>
                <Col>
                    <p id="ag">Height</p>
                    <input type="text" id="het"></input>
                    <select id="dk">
                    <option value="height">cm</option>
                    <option value="height">inches</option>
                    </select>
                </Col>
                <Col>
                    <p id="ag">Weight</p>
                    <input type="text" id="wet"></input>
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
                <button className="button2">Save</button>
                <button className="button3" onClick={confir}>
                    Submit
                </button>

                <div id="box">
                    <div id="human"></div>
                    <Col id="box2">
                    <p id="app">+ Add Patient Photo</p>
                    </Col>
                </div>
                <div id="boxx">
                    <div id="location"></div>
                    <Col id="box3">
                    <p id="loc">+ Add More Images</p>
                    </Col>
                </div>
                <button className="button4">Add Location</button>

                <div id="finger1"></div>
                <div id="retina"></div>

                <div id="toggle">
                    <Toggle
                    backgroundColorChecked="#001c3c;"
                    backgroundColorUnchecked="grey"
                    sliderHeight={15}
                    sliderWidth={15}
                    width={50}
                    height={24}
                    ></Toggle>
                </div>

                <p id="qvip">VIP</p>
            </div>
        </div>
  
  );
}
export default App;
