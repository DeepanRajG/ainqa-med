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
  const [getdata, setPostId] = useState("");


  
  
  const makeAPIpost = async () => {
    functions();

   

    try {
      const response = await fetch('https://idmservices.dev.ainqaplatform.in/login_keycloackuser', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
          'tenantid':"04d7631b-3216-4a40-9821-b997b2ce0031"
        },
        body: JSON.stringify(json)
        

    });
      const data = await response.json();

      let dataa=data.tokenDetails.access_token;
      
      console.log(dataa)
     setJsonData(data)
    }
    catch (e) {
      console.log(e)
    }
  }

  // const makeAPIget = async () => {
   

  //   try {
  //     const response = await fetch('https://idmservices.dev.ainqaplatform.in/login_keycloackuser',{mode:"cors"});
  //     const data = await response.json();
  //     console.log({ data })
  //    //setJsonData(data)
  //   }
  //   catch (e) {
  //     console.log(e)
  //   }
  // }
  // useEffect(() => {
  //   makeAPIget();
  // }, [])





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





  let json ={} ;
  const navigate = useNavigate();

  //onclick event
  const onclickEvent = () => {
    let path = '/ainqa-med/forgotpassword';
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
      var e = document.getElementById("ambu");
      document.getElementById("errorr").innerHTML = ""
      var value = e.value;
     // var text = e.options[e.selectedIndex].text;
      let path = '/ainqa-med/landing';
      navigate(path);

      //json.type = text;
      json.username = value;
      json.password = 1234;
      console.log(json);
    }
    else if (OTP == null) {
      document.getElementById("errorr").innerHTML = "Please enter pin"
      setOtpInput(null);
    }
    else {
      document.getElementById("errorr").innerHTML = "Wrong pin"
      setOtpInput(null);
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div id="lg">
          <Col >
            <p id='hed'>PARAMEDIC LOGIN</p>
            <select id="ambu" defaultValue={"DEFAULT"}>
              <option id='option' value="DEFAULT" hidden>Ambulance Referral Type </option>
              <option id='option0' value="CodingMaster/11330" >Partner referral</option>
              <option id='option1' value="CodingMaster/11331">External/non partner</option>
              <option id='option2' value="CodingMaster/11332">Internal/own</option>
            </select>

            <p id='ente'>ENTER PIN</p>
            <h5 id="errorr"></h5>




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
                top:"-3px",
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
          <button className="buttonlog" onClick={makeAPIpost} >Login</button>
        </div>

      </header>
    </div>
  );
}
export default App;