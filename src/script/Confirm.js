import '../css/confirm.css';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function App(){
return(
    <div style={{ display: 'block', }}>
      <header>
        <h4 id="head">QUICK  REGISTRATION</h4>
        <h4 id="con">CONFIRMATION</h4>
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