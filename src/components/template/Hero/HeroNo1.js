import React from 'react';

class HeroNo1 extends React.Component {
    constructor(props){  
      super(props);
          this.state = {
          };   
      }


  render() {
    const background =({
        backgroundColor:'red',
        height:500
    });
    return (
        <div style={background}>   
            
        </div>
    );
  }
}

export default HeroNo1;
