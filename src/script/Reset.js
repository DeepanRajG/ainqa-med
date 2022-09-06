import '../css/reset.css';
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

let OTP;

function App() {
  let json = {
    "otp": " ",
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
    console.log(otp);
    OTP = otp;
    setOtpInput(otp);
  };


  const functions = () => {

    if (OTP == 123456) {
      var e = document.getElementById("dropdown");
      document.getElementById("error").innerHTML = ""
      var value = e.value;
      var text = e.options[e.selectedIndex].text;
      let path = 'landing';
      navigate(path);

      json.type = text;
      json._key = value;
      json.otp = OTP;
      console.table(json);
    }
    else if (OTP == null) {
      document.getElementById("error").innerHTML = " please enter pin"
      setOtpInput("");
    }
    else {
      document.getElementById("error").innerHTML = "wrong pin"
      setOtpInput("");
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <div id="form">
          <p>RESET PIN</p>
          
          <Col className="Otp">
            <OtpInput
              value={otpInput}
              inputStyle=
              {{
               
                border: "0px",
                borderBottom: "1px solid black",
                margin:"auto",

              }}
              isInputSecure={false}
              onChange={handleChange}
              numInputs={6}
              isInputNum={true}
              separator={
                <span
                  style={{
                    margin: "0px 12px 0px 0px",
                    fontSize:"10px"
                  }}
                ></span>
              }
            />
          </Col>
          <p className="forgot" href="" type="button" onClick={onclickEvent}>
            Forgot PIN?</p>
          <button className="button" onClick={functions} >Reset</button>
        </div>

      </header>
    </div>
  );
}
export default App;