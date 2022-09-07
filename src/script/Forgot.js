import '../css/forget.css';
import React, { useState ,useEffect  } from "react";
 
function App() {
  let OTP;

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
      document.getElementById("error").innerHTML = "&emsp;&ensp; Wrong pin"
      setOtpInput("");
    }
   
  }

  return (
    <div className="App">
      <header className="App-header">
        <form id="fform">
        <h4 id='fh4'>FORGOT PIN?</h4>

        <h6 id='fh6'>Registered mobile number</h6>
        <div> 
          
          <input id="ftext1" type="text" placeholder="+91"></input>
           
          </div>
         
        
        <div>
          <button id="fbutton1">send OTP</button>
        </div>
        <h7 id="fh7">resend OTP?</h7>

        <div>
           <button id="fbutton2">Enter OTP</button>
        </div>
        <h8 id='fh8'>00:55sec</h8>
        <div>
          <button id="fbutton3"> Verify</button></div>

        </form>
      </header>
    </div>
  );
}
export default App;
