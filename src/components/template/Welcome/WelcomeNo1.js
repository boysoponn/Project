import React from 'react';

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
        </div>
    );
  }
}

export default WelcomeNo1;
