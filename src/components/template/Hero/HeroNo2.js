import React from 'react';

class HeroNo2 extends React.Component {
    constructor(props){  
      super(props);
          this.state = {
          };   
      }


  render() {
    const background =({
        backgroundColor:'blue',
        height:500
    });
    return (
        <div style={background}>   
            
        </div>
    );
  }
}

export default HeroNo2;
