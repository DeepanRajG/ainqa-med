import '../css/newregis.css';
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function App() {
    const navigate = useNavigate();
    const func = () => {
        var e = document.getElementById("selectopt");
        
        var value = e.value;
        var text = e.options[e.selectedIndex].text;
        console.log(text)
        if(text=="Log Out"){
            let path = 'login';
            navigate(path);
        }
    }



    return (
        <div className='back'>
            <header id="header0">
                <Row>
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

            <div id="main">

            </div>
        </div>

    );
}
export default App;