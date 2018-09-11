import React, {Component} from 'react';
import '../css/sidebar.css';
import { SlideToggle } from "react-slide-toggle";
import eases from 'eases';
import FluidInput from './fluidinput';

class Sidebar extends Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state={
      value: ""
    };
  }
  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }
render() {
    return (
      <SlideToggle
          //collapsed
          duration={300}
          easeCollapse={eases["circInOut"]}
          easeExpand={eases["circInOut"]}
          render={({
            onToggle,
            setCollapsibleElement
          }) => (
            <div className="slide-toggle">
              <div onClick={onToggle} className="slide-toggle__header">
              <label>{this.state.value}</label>
              </div>
              <div className="slide-toggle__box" ref={setCollapsibleElement}>
                <div className="slide-toggle__box-inner">
                  <FluidInput value={this.state.value} label="Title"onChange={this.onChange}/><br/>
                  <FluidInput value={this.state.value} label="Description"onChange={this.onChange}/><br/>
                  <FluidInput value={this.state.value} label="Menu"onChange={this.onChange}/><br/>
                  <button onClick={onToggle}>
                    put
                  </button>
                </div>
              </div>
            </div>
          )}
        />
    )
  }
}
export default Sidebar;