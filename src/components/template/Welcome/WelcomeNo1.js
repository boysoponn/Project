import React from 'react';
// import { Carousel } from 'antd';
// import './h.css';

class WelcomeNo1 extends React.Component {
    constructor(props){  
      super(props);
          this.state = {
          };   
      }


  render() {
    const background =({
        backgroundColor:'blue',
        height:1500
    });
    return (
        <div style={background}> 
            {/* <Carousel autoplay>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
            </Carousel>, */}
        </div>
    );
  }
}

export default WelcomeNo1;
