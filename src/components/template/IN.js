import React from 'react';
import '../../css/animate.min.css';
import HeroNo1 from './Hero/HeroNo1'
import HeroNo2 from './Hero/HeroNo2'
import WelcomeNo1 from './Welcome/WelcomeNo1'
import WelcomeNo2 from './Welcome/WelcomeNo2'

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
    heroImagePick={this.props.heroImagePick}
    heroTitle={this.props.heroTitle} 
    heroTitleAnimate={this.props.heroTitleAnimate}
    heroTitleDuration={this.props.heroTitleDuration}
    heroTitleFontFamily={this.props.heroTitleFontFamily} 
    heroTitleFontSize={this.props.heroTitleFontSize}
    heroTitleFontWeight={this.props.heroTitleFontWeight}
    heroTitleFontStyle={this.props.heroTitleFontStyle}
    heroTitleStatus={this.props.heroTitleStatus}
    heroTitleColor={this.props.heroTitleColor}

    heroDescription={this.props.heroDescription}
    heroDescriptionDuration= {this.props.heroDescriptionDuration}
    heroDescriptionFontFamily={this.props.heroDescriptionFontFamily}
    heroDescriptionFontSize={this.props.heroDescriptionFontSize}
    heroDescriptionFontWeight={this.props.heroDescriptionFontWeight}
    heroDescriptionFontStyle={this.props.heroDescriptionFontStyle}
    heroDescriptionStatus={this.props.heroDescriptionStatus}
    heroDescriptionAnimate={this.props.heroDescriptionAnimate} 
    heroDescriptionColor={this.props.heroDescriptionColor}
    />
  }
  if( this.props.Hero === "HeroNo2"){
    Hero = <HeroNo2
    heroImagePick={this.props.heroImagePick}
    heroTitle={this.props.heroTitle} 
    heroTitleAnimate={this.props.heroTitleAnimate}
    heroTitleDuration={this.props.heroTitleDuration}
    heroTitleFontFamily={this.props.heroTitleFontFamily} 
    heroTitleFontSize={this.props.heroTitleFontSize}
    heroTitleFontWeight={this.props.heroTitleFontWeight}
    heroTitleFontStyle={this.props.heroTitleFontStyle}
    heroTitleStatus={this.props.heroTitleStatus}
    heroTitleColor={this.props.heroTitleColor}

    heroDescription={this.props.heroDescription}
    heroDescriptionDuration= {this.props.heroDescriptionDuration}
    heroDescriptionFontFamily={this.props.heroDescriptionFontFamily}
    heroDescriptionFontSize={this.props.heroDescriptionFontSize}
    heroDescriptionFontWeight={this.props.heroDescriptionFontWeight}
    heroDescriptionFontStyle={this.props.heroDescriptionFontStyle}
    heroDescriptionStatus={this.props.heroDescriptionStatus}
    heroDescriptionAnimate={this.props.heroDescriptionAnimate} 
    heroDescriptionColor={this.props.heroDescriptionColor}
    />
  }
  if( this.props.Welcome === "WelcomeNo1"){
    Welcome = <WelcomeNo1/>
  }
  if( this.props.Welcome === "WelcomeNo2"){
    Welcome = <WelcomeNo2/>
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
