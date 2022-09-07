import '../css/forget.css';
 
function App() {
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
        <h7>resend OTP?</h7>

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
