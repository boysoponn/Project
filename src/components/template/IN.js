import React from 'react';
import '../../css/animate.min.css';
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

  let Hero;
  let Welcome;
  if( this.props.Hero === "HeroNo1"){
    Hero = <HeroNo1
    ImagePick={this.props.heroImagePick}
    title={this.props.title}
    duration= {this.props.duration}
    FontFamily={this.props.FontFamily}
    FontSize={this.props.FontSize}
    FontWeight={this.props.FontWeight}
    FontStyle={this.props.FontStyle}
    Status={this.props.Status}
    animate={this.props.animate} 

    description={this.props.description}
    durationDescription= {this.props.durationDescription}
    FontFamilyDescription={this.props.FontFamilyDescription}
    FontSizeDescription={this.props.FontSizeDescription}
    FontWeightDescription={this.props.FontWeightDescription}
    FontStyleDescription={this.props.FontStyleDescription}
    StatusDescription={this.props.StatusDescription}
    animateDescription={this.props.animateDescription} 
    />
  }
  if( this.props.Hero === "HeroNo2"){
    Hero = <HeroNo2
    title={this.props.title}
    duration= {this.props.duration}
    FontFamily={this.props.FontFamily}
    FontSize={this.props.FontSize}
    FontWeight={this.props.FontWeight}
    FontStyle={this.props.FontStyle}
    Status={this.props.Status}
    animate={this.props.animate} 
    />
  }
  if( this.props.Welcome === "WelcomeNo1"){
    Welcome = <WelcomeNo1/>
  }
return (
      <div>   
      {Hero}
      {Welcome}
      </div>
);
  }
}



export default IN;
