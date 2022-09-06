import '../css/App copy.css';

import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Progressbar from './progressbar';


function App() {


  return (

    <div style={{ display: 'block', }}>

      <header>
        <h4 id="head">PARAMEDIC </h4>
      </header>


      <Row id="main" style={{
        paddingTop: '30px',
        paddingBottom: '30px',


      }}>
        <Col id="left">
          <p id="stock">Today Summary</p>
          <Col className='today'>
            <Row>
              <Col>
                <p id="totxt1">Total Cases &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<span id="totalCases">45
                </span></p>
                <p id="totxt">Completed Cases&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<span id="cmpcases">27
                </span></p>
                <p id="totxt">Pending Cases&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<span id="pndcases">89
                </span></p>



              </Col>
              <Col>
                <p id="totxt1">Cancelled Cases&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<span id="canccases">33
                </span></p>
                <p id="totxt">Missed Cases&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;:<span id="misscases">12
                </span></p>


              </Col>
            </Row>


          </Col>

          <Col className='search'>
            <Row>
              <Col>
                <p id="srctxt">Search Patient  </p>
                <Row id="src">
                  <Col >
                  <input id ="ser"  placeholder='Search'></input>
                  </Col>
                  <Col  >
                  <button id="thum" ><span class="icon"></span></button>
                  </Col>
                 
                  

                </Row>

                <button id="thump" ><span class="icon"></span>Thump impression</button>

              </Col>


              <Col>


                <button id="new"> <span class="icon"></span>Add new patient</button>

                <button id="ret"> <span class="icon"></span>Retina scan</button>



              </Col>

            </Row>

          </Col>
          <p id="stock">My Stock Status</p>
          <Row className='scan'>
            <div id="prog">
              <p id="progtext1">Basic Life Support Drugs</p>
              <Progressbar bgcolor="orange" progress='30' height={10} />
              <p id="progtext">Main RX box</p>
              <Progressbar bgcolor="red" progress='60' height={10} />
              <p id="progtext">Long Distance RX box</p>
              <Progressbar bgcolor="#99ff66" progress='50' height={10} />
            </div>
            <div id="prog">
              <p id="progtext1">Counsumables </p>
              <Progressbar bgcolor="orange" progress='30' height={10} />
              <p id="progtext">Bio Medical devices-IOMT</p>
              <Progressbar bgcolor="red" progress='60' height={10} />
              <p id="progtext">Other Equipments</p>
              <Progressbar bgcolor="#99ff66" progress='50' height={10} />
            </div>


          </Row>

        </Col>
        <Col id="right" >

        <p id="stock1">Emergency Case Type</p>
          <Col className='eme'>
            <form id="case">
              <Row>
                <Col
                className='Burns'>Burns
                <p id="burns">0</p>
              
                
                 </Col>

                <Col className='Heart'>Heart Attack
                <p id="heart">2</p></Col>

                <Col className='Acc'>Accidents
                <p id="acc">5</p></Col>

              </Row>

              <Row>

                <Col className='Frac'>Fractures
                <p id="frac">5</p></Col>

                <Col className='Trau'>Trauma 
                <p id="trau">2</p></Col>

                <Col className='Elect'>Electrocution
                <p id="elect">1</p></Col>


              </Row>



            </form>

          </Col>
          <p id="stock2">EP Assistance</p>
          <Col className='epas'>
            
          <form id="ep">



<div className='phone'></div>

<div className='video'></div>

<div className='smart'></div>

</form>

          </Col>


        </Col>

      </Row>
    </div>




  );
}
export default App;