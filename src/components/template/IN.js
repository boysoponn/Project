import React from 'react';
import '../../css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import HeroNo1 from './Hero/HeroNo1'
import HeroNo2 from './Hero/HeroNo2'
import WelcomeNo1 from './Welcome/WelcomeNo1'

class IN extends React.Component {
    constructor(props){  
      super(props);
          this.state = {
          };   
      }


  render() {
    const title =({
      animationDuration: this.props.duration,
      opacity: 1,
      fontFamily:this.props.FontFamily,
      fontSize:this.props.FontSize,
      fontWeight:this.props.FontWeight,
      fontStyle:this.props.FontStyle,
      display:this.props.Status
  });
  let Hero;
  let Welcome;
  if( this.props.Hero === "HeroNo1"){
    Hero = <HeroNo1/>
  }
  if( this.props.Hero === "HeroNo2"){
    Hero = <HeroNo2/>
  }
  if( this.props.Welcome === "WelcomeNo1"){
    Welcome = <WelcomeNo1/>
  }
return (
      <div>   
        <ScrollAnimation style={title}className={this.props.animate} >
          {this.props.title}
        </ScrollAnimation> 
      {Hero}
      {Welcome}
      </div>
);
  }
}



export default IN;
