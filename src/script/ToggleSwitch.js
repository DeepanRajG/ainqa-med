import React, { Component } from "react";
import Switch from "react-switch";

const textSwitch={
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"100%",
    fontSize:"15px",
    color:"black",
    paddingRight:"2px",
}
class Toggle extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <div>
        <Switch className="react-switch" onchange={this.handleChange} checked={this.state.checked}
        checkedIcon={<div style={textSwitch}>yes</div>}
        uncheckedIcon={<div style={textSwitch}>no</div>}>

        </Switch>
      </div>
    );
  }
}
export default Toggle;