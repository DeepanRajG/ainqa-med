
import '../css/scenesizeup.css';
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toggle from 'react-styled-toggle';

export const scenesizeup = () => {
return (
<div>
<div className='back'>
<header id="header0">
<Row id="hd">
<Col> <p id="squick"> SCENE SIZEUP</p></Col>
<div id="wether"></div>
 <p id="p1">30 clody</p>
<div id='line'></div>
<div id="settings"></div>
 <div id="join"></div>
<div id="noti"></div>
 <form id="para">
<select id='selectopt' >
 <option hidden >Jennifer Jo</option>
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
</div>
<div>  <p id="snam">Problems</p></div>
<div id="container3">
    <div id="styp"><p>Type of Emergency</p></div>
</div>





</div>
)
}
export default scenesizeup;