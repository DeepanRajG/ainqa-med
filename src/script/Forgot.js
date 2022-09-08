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

        <p id='fh6'>Registered mobile number</p>
        <div> 
          
          <input id="ftext1" type="text" placeholder="+91"></input>
          
           
          </div>
         
        
        <div>
          <button id="fbutton1">Send OTP</button>
        </div>
        <p id="fh7">Resend OTP?</p>

        <div>
           <input id="fbutton2" placeholder='Enter Otp'></input>
        </div>
        <p id='fh8'>00:55sec</p>
        <div>
          <button id="fbutton3"> Verify</button></div>

        </form>
      </header>
    </div>
  );
}
export default App;
