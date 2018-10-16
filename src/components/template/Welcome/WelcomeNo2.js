import React from 'react';
import { Carousel } from 'antd';
import './h.css';

class WelcomeNo1 extends React.Component {
    constructor(props){  
      super(props);
          this.state = {
          };   
      }


  render() {
    const background =({
        backgroundColor:'yellow',
        height:1500
    });
    return (
        <div style={background}> 
        </div>
    );
  }
}

export default WelcomeNo1;
