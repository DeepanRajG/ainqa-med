import '../css/confirm.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useState } from 'react';
import Toggle from 'react-styled-toggle';

function App(){
  const navigate = useNavigate();
  const [value, setValue] = useState(false);
    const func = () => {
        var e = document.getElementById("selectopt");
        
        var value = e.value;
        var text = e.options[e.selectedIndex].text;
        console.log(text)
        if(text=="Log Out"){
            let path = '/login';
            navigate(path);
        }
    }
return(
    <div style={{ display: 'block', }}>
      <header id="header0">
                <Row id="hd">
                    <Col> <p id="quick"> QUICK REGISTRATION CONFIRMATION</p></Col>
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
            
     <Row id="main" style={{
        paddingTop: '30px',
        paddingBottom: '30px',
      }}>
        <Col id="left">
          <form id="male"> 
           <div id="mal"></div>
          </form>
      <div id="patient">Patient Name&nbsp;&nbsp;&nbsp;:</div>
      <div id="vijay">Vijay Kumar</div>
     
      <div id="id">Patient Id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</div>
      <div id="no">4427844</div> 
      <div id="mrn">MRN ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</div>
      <div id="mri">6583528940</div> 
      <div id="gender">Gender&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</div>
      <div id="gend">Male</div> 
      <div id="vip">VIP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
    
      <div id="prof"></div>
      <div id="ID"></div>
      <div className="ID"></div>
      <div id="genC"></div>
      <div className='tog '> 
      <Toggle backgroundColorChecked='#01205C;' backgroundColorUnchecked='#D9D9D9'
       sliderHeight={15} sliderWidth={15}  width={50} height={25} marginLeft={30}>
        
      
      </Toggle>
      </div>
      
      </Col>
      <Col id="right" >
      <div id="yea">43</div>
      <div id="Years">yrs</div>
      <div id="mon">4</div>
      <div id="months">months</div>
      <div className="rectangle-17"></div>
       <div id="weight">Weight</div>
      <div id="height">Height</div>
      <div id="blood">Blood group</div>
      <div id="wei">69</div>
      <div id="kg">Kg</div>
      <div className="rect"></div>
      <div id="hei">178</div>
      <div id="cm">Cm</div>
      <div className="recta"></div>
      <div id="blo">B</div>
      <div id="ve">+ve</div>
        
    
        <div id="his">Patient History</div>
      <button id="view">View</button>
      <form id="finger">
         <div className="finger"> 
         <div id="ok"> </div>
        </div>
        </form>
    
      <form id="eye"><div className="eye"> </div>
      <div id="yes"></div>
      </form>
      
      </Col>
      </Row>
      
      <button id="next">Next</button>
      <Row>
      
      </Row>
          </div>
)
}
export default App