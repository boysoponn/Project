import React from 'react';
import '../../css/animate.min.css';
import HeroNo1 from './Hero/HeroNo1'
import MenubarNo1 from './Menubar/menubarNo1'
import HeroNo2 from './Hero/HeroNo2'
// import WelcomeNo1 from './Welcome/WelcomeNo1'
// import WelcomeNo2 from './Welcome/WelcomeNo2'
import CarouselNo1 from './Carousel/CarouselNo1'


class IN extends React.Component {

  render() {
  const End={
    height:200,
    backgroundColor:'none',
  };
  let menubar;
  let Hero;
  let Carousel;
  menubar=<MenubarNo1/>
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
    
    heroButton={this.props.heroButton} 
    heroButtonSelected={this.props.heroButtonSelected}
    heroButtonAnimate={this.props.heroButtonAnimate} 
    heroButtonDuration={this.props.heroButtonDuration} 
    heroButtonFontFamily={this.props.heroButtonFontFamily}
    heroButtonFontSize={this.props.heroButtonFontSize}
    heroButtonFontWeight={this.props.heroButtonFontWeight}
    heroButtonFontStyle={this.props.heroButtonFontStyle}
    heroButtonStatus={this.props.heroButtonStatus}
    heroButtonColor={this.props.heroButtonColor}
    heroButtonSwapColor={this.props.heroButtonSwapColor}
    heroButtonSwap={this.props.heroButtonSwap}
    heroButtonLink={this.props.heroButtonLink}
    heroButtonLinkTarget={this.props.heroButtonLinkTarget}
    heroButtonRadius={this.props.heroButtonRadius}
    heroButtonBGColor={this.props.heroButtonBGColor}
    heroButtonHBGColor={this.props.heroButtonHBGColor}
    heroButtonBDColor={this.props.heroButtonBDColor}
    heroButtonHBDColor={this.props.heroButtonHBDColor}
    heroButtonHoverColor={this.props.heroButtonHoverColor}
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

    heroButton={this.props.heroButton} 
    heroButtonSelected={this.props.heroButtonSelected}
    heroButtonAnimate={this.props.heroButtonAnimate} 
    heroButtonDuration={this.props.heroButtonDuration} 
    heroButtonFontFamily={this.props.heroButtonFontFamily}
    heroButtonFontSize={this.props.heroButtonFontSize}
    heroButtonFontWeight={this.props.heroButtonFontWeight}
    heroButtonFontStyle={this.props.heroButtonFontStyle}
    heroButtonStatus={this.props.heroButtonStatus}
    heroButtonColor={this.props.heroButtonColor}
    heroButtonSwapColor={this.props.heroButtonSwapColor}
    heroButtonSwap={this.props.heroButtonSwap}
    heroButtonLink={this.props.heroButtonLink}
    heroButtonLinkTarget={this.props.heroButtonLinkTarget}
    heroButtonRadius={this.props.heroButtonRadius}
    heroButtonBGColor={this.props.heroButtonBGColor}
    heroButtonHBGColor={this.props.heroButtonHBGColor}
    heroButtonBDColor={this.props.heroButtonBDColor}
    heroButtonHBDColor={this.props.heroButtonHBDColor}
    heroButtonHoverColor={this.props.heroButtonHoverColor}
    />
  }
  if( this.props.Carousel === "CarouselNo1"){
    Carousel = <CarouselNo1
    carouselContent={this.props.carouselContent}
    carouselSpeed={this.props.carouselSpeed}
    carouselPauseOnHover={this.props.carouselPauseOnHover}
    carouselDots={this.props.carouselDots}
    carouselAutoplay={this.props.carouselAutoplay}
    carouselVertical={this.props.carouselVertical}
    />
  }
  if( this.props.Carousel === "CarouselNo2"){
    Carousel = <CarouselNo1
    carouselContent={this.props.carouselContent}
    carouselSpeed={this.props.carouselSpeed}
    carouselPauseOnHover={this.props.carouselPauseOnHover}
    carouselDots={this.props.carouselDots}
    carouselAutoplay={this.props.carouselAutoplay}
    carouselVertical={this.props.carouselVertical}
    />
  }
return (
      <div> 
      {menubar}  
      {Hero}
      {Carousel}
      <div style={End}></div>
      </div>
);
  }
}



export default IN;
