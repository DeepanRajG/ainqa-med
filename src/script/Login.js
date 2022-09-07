import '../css/App.css';
import React, { useState ,useEffect  } from "react";
import ReactDom from "react-dom"
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

let OTP;

function App() {
  
  const [JsonData, setJsonData] = useState("");
  
  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/ambulance_ref_type', {mode:'cors'});
      const data = await response.json();
     // console.log({ data })
     setJsonData(data)
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    makeAPICall();
  }, [])
try{
  for(let i =0;i<=2;i++){
    var optionData=JsonData[0].result[i].shortdesc;
    var optionKey=JsonData[0].result[i]._key;
    document.getElementById("option"+i).innerHTML = optionData;
    document.getElementById("option"+i).value = optionKey;
  }
}
catch (e){

}





  let json = {
    "pin": " ",
    "_key": " "
  }
  const navigate = useNavigate();

  //onclick event
  const onclickEvent = () => {
    let path = 'forgotpassword';
    navigate(path);
  }





  const [otpInput, setOtpInput] = useState("");
  const handleChange = (otp) => {
     //console.log(otp);
    OTP = otp;
    setOtpInput(otp);
  };


  const functions = () => {

    if (OTP == 123456) {
      var e = document.getElementById("dropdown");
      document.getElementById("errorr").innerHTML = ""
      var value = e.value;
      var text = e.options[e.selectedIndex].text;
      let path = 'landing';
      navigate(path);

      json.type = text;
      json._key = value;
      json.pin = OTP;
      console.log(json);
    }
    else if (OTP == null) {
      document.getElementById("errorr").innerHTML = "Please enter pin"
      setOtpInput("");
    }
    else {
      document.getElementById("errorr").innerHTML = "&emsp;&ensp; Wrong pin"
      setOtpInput("");
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div id="form">
          <Col >
            <p id='hed'>PARAMEDIC LOGIN</p>
            <select className="dropdown" id="dropdown" defaultValue={"DEFAULT"}


            >


              <option id='option' value="DEFAULT" hidden>Ambulance referral type </option>
              <option id='option0' value="partner">Partner referral</option>
              <option id='option1' value="External/non partner">External/non partner</option>
              <option id='option2' value="internal/own">Internal/own</option>
            </select>

            <p id='ent'>ENTER PIN</p>
            <h5 id="errorr"> </h5>




          </Col>
          <Col className="Otplog">
            <OtpInput id="otpinput"
              value={otpInput}
              inputStyle=
              {{
               
                border: "0px",
                borderBottom: "1px solid black",
                margin:"auto",
                position:"relative",
                bottom: "0px",
                top:"0px",
              }}
              isInputSecure={false}
              onChange={handleChange}
              numInputs={6}
              isInputNum={true}
              separator={
                <span
                  style={{
                    margin: "0px 12px 0px 0px",
                    fontSize:"px"
                  }}
                ></span>
              }
            />
          </Col>
          <p className="forgotlog" onClick={onclickEvent}>
              Forgot PIN?</p>
          <button className="buttonlog" onClick={functions} >login</button>
        </div>

      </header>
    </div>
  );
}
export default App;