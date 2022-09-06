import '../css/App.css';
import React, { useState } from "react";
import OtpInput from "react-otp-input";
let OTP;
function App() {
  const [otpInput, setOtpInput] = useState("");
  const handleChange = (otp) => {
    console.log(otp);
    OTP = otp;
    setOtpInput(otp);
  };


  const functions = () => {

    if (OTP === 123456) {
      var e = document.getElementById("dropdown");
      var value = e.value;
      var text = e.options[e.selectedIndex].text;
      // let type=document.getElementsById("dropdown").value
      let json = {
        "otp": " ",
        "_key": " "
      }
      json.type = text;
      json._key = value;
      json.otp = OTP;
      console.table(json);
    }
    else if (OTP == null) {
      document.getElementById("error").innerHTML = " please enter pin"
    }
    else {
      document.getElementById("error").innerHTML = "wrong otp"
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <div id="form">
          <form >
            <h4>FORGET PIN</h4>
            <select name="dropdown" id="dropdown" defaultValue={"DEFAULT"}>


              <option value="DEFAULT" disabled>Ambulance referral type </option>
              <option value="partner">Partner referral</option>
              <option value="External/non partner">External/non partner</option>
              <option value="internal/own">Internal/own</option>
            </select>

            <h5>ENTER PIN</h5>
            <h5 id="error"> </h5>
            <div className="Otp">

              <OtpInput
                value={otpInput}
                inputStyle=
                {{
                  border: "0px",
                  borderBottom: "1px solid black"
                }}
                isInputSecure={false}
                onChange={handleChange}
                numInputs={6}
                isInputNum={true}
                separator={
                  <span
                    style={{
                      margin: "0px 12px 0px 0px"
                    }}
                  ></span>
                }
              />
            </div>
            <p className="forgot">
              Forgot PIN?</p>

          </form>
          <button className="button" onClick={functions} >login</button>
        </div>

      </header>
    </div>
  );
}
export default App;