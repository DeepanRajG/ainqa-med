npimport '../css/confirm.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function App(){
  const navigate = useNavigate();
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
     <Row id="main" style={{
        paddingTop: '30px',
        paddingBottom: '30px',


      }}>
        <Col id="left">
      <div id="patient">Patient Name&nbsp;&nbsp;&nbsp;:</div>
      <div id="vijay">Vijay Kumar</div>
      <div id="id">Patient Id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</div>
      <div id="vijay">4427844</div> 
      <div id="id">MRN ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</div>
      <div id="vijay">6583528940</div> 
      <div id="id">Gender&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</div>
      <div id="vijay">Male</div> 
      <div id="vip">VIP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
      
      </Col>
      <Col id="right" >
      <div id="yea">43</div>
      <div id="years">yrs</div>
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
      <div className="rec"></div>
      <div id="blo">B  +ve</div>
        <div id="nam">Patient History</div>
      <button id="view">View</button>
      
      </Col>
      </Row>
      
      <button id="next">Next</button>
      <Row>
      
      </Row>
          </div>
)
}
export default App