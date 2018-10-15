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
    titleDuration= {this.props.titleDuration}
    titleFontFamily={this.props.titleFontFamily}
    titleFontSize={this.props.titleFontSize}
    titleFontWeight={this.props.titleFontWeight}
    titleFontStyle={this.props.titleFontStyle}
    titleStatus={this.props.titleStatus}
    titleAnimate={this.props.titleAnimate} 
    titleColor={this.props.titleColor}

    description={this.props.description}
    descriptionDuration= {this.props.descriptionDuration}
    descriptionFontFamily={this.props.descriptionFontFamily}
    descriptionFontSize={this.props.descriptionFontSize}
    descriptionFontWeight={this.props.descriptionFontWeight}
    descriptionFontStyle={this.props.descriptionFontStyle}
    descriptionStatus={this.props.descriptionStatus}
    descriptionAnimate={this.props.descriptionAnimate} 
    descriptionColor={this.props.descriptionColor}
    />
  }
  if( this.props.Hero === "HeroNo2"){
    Hero = <HeroNo2
    ImagePick={this.props.heroImagePick}
    title={this.props.title}
    titleDuration= {this.props.titleDuration}
    titleFontFamily={this.props.titleFontFamily}
    titleFontSize={this.props.titleFontSize}
    titleFontWeight={this.props.titleFontWeight}
    titleFontStyle={this.props.titleFontStyle}
    titleStatus={this.props.titleStatus}
    titleAnimate={this.props.titleAnimate} 

    description={this.props.description}
    DescriptionDuration= {this.props.DescriptionDuration}
    DescriptionFontFamily={this.props.DescriptionFontFamily}
    DescriptionFontSize={this.props.DescriptionFontSize}
    DescriptionFontWeight={this.props.DescriptionFontWeight}
    DescriptionFontStyle={this.props.DescriptionFontStyle}
    DescriptionStatus={this.props.DescriptionStatus}
    DescriptionAnimate={this.props.DescriptionAnimate} 
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
