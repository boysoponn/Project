import React, { Component } from 'react';
import '../css/login.css';

class FluidInput extends Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        focused: false,
        value: ""
      };
    }
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    focusField() {
      const { focused } = this.state;
      this.setState({
        focused: !focused
      });
    }
    
    render() {
      const { type, label, style } = this.props;
      const { focused, value } = this.state;
      
      let inputClass = "fluid-input";
      if (focused) {
        inputClass += " fluid-input--focus";
      } else if (value !== "") {
        inputClass += " fluid-input--open";
      }
      
      return (
        <div className={inputClass} style={style}>
          <div className="fluid-input-holder">
            <input 
              className="fluid-input-input"
              type={type}    
              onFocus={this.focusField.bind(this)}
              onBlur={this.focusField.bind(this)}
              onChange={this.handleChange.bind(this)}
              id={this.props.id}
              value={this.state.value}
              required
              autoComplete="off"
            />
            <label className="fluid-input-label">{label}</label>
            
          </div>
        </div>
      );
    }
  }
  export default FluidInput;