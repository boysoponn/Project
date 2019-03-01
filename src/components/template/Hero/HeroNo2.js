import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { connect } from 'react-redux'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';


class HeroNo2 extends React.Component {
    constructor(props){  
      super(props);
          this.state = {
          };   
      }

  render() {
    const background ={
        backgroundImage:"url("+this.props.heroBackgroundImage+")",
        backgroundSize:'cover',
        height: '100%',
        backgroundPosition: 'center center',
        backgroundRepeat:  'no-repeat',
        margin:0,
        position:'relative',
    };
    const content={
      padding: '25vh 10% 10%',
    };
    const title ={
      color:this.props.heroTitleColor,
      opacity: 1,
      animationDuration: this.props.heroTitleDuration,
      fontFamily:this.props.heroTitleFontFamily,
      fontSize:'calc('+this.props.heroTitleFontSize+ 'vw / 15 )',
      fontWeight:this.props.heroTitleFontWeight,
      fontStyle:this.props.heroTitleFontStyle,
      display:this.props.heroTitleStatus,
      textAlign: this.props.heroTitlePosition,
      paddingBottom:'2%'
  };
  const description={
      opacity: 1,
      color:this.props.heroDescriptionColor,
      animationDuration: this.props.heroDescriptionDuration,
      fontFamily:this.props.heroDescriptionFontFamily,
      fontSize:'calc('+this.props.heroDescriptionFontSize+ 'vw / 15 )',
      fontWeight:this.props.heroDescriptionFontWeight,
      fontStyle:this.props.heroDescriptionFontStyle,
      display:this.props.heroDescriptionStatus,
      textAlign: this.props.heroDescriptionPosition,
      paddingBottom:'2%'    
  };
  const buttonAnimate={
    opacity: 1,
    animationDuration: this.props.heroButtonDuration,
    display:this.props.heroButtonStatus,
    textAlign:this.props.heroButtonPosition
  };

  let button;
  if(this.props.heroButtonSelected !== "slideLeft" && this.props.heroButtonSelected !== "slide" ){
    button =         
    <ChoiceButton  
    className={this.props.heroButtonSelected} 
    FontFamily={this.props.heroButtonFontFamily}
    FontWeight={this.props.heroButtonFontWeight}
    FontSize={this.props.heroButtonFontSize}
    FontStyle={this.props.heroButtonFontStyle}
    buttonHoverColor={this.props.heroButtonHoverColor}
    buttonHBGColor={this.props.heroButtonHBGColor}
    buttonColor={this.props.heroButtonColor}
    buttonBDColor={this.props.heroButtonBDColor}
    buttonRadius={this.props.heroButtonRadius}
    buttonBGColor={this.props.heroButtonBGColor}
    buttonHBDColor={this.props.heroButtonHBDColor}
  >{this.props.heroButton}</ChoiceButton>
  }
  else{
    button = 
    <ChoiceButton content={this.props.heroButton} 
    swapContent={this.props.heroButtonSwap} 
    className={this.props.heroButtonSelected} 
    FontFamily={this.props.heroButtonFontFamily}
    FontWeight={this.props.heroButtonFontWeight}
    FontSize={this.props.heroButtonFontSize}
    FontStyle={this.props.heroButtonFontStyle}
    buttonSwapColor={this.props.heroButtonSwapColor}
    buttonHBGColor={this.props.heroButtonHBGColor}
    buttonColor={this.props.heroButtonColor}
    buttonBDColor={this.props.heroButtonBDColor}
    buttonRadius={this.props.heroButtonRadius}
    buttonBGColor={this.props.heroButtonBGColor}
    buttonHBDColor={this.props.heroButtonHBDColor}
  >
  &nbsp;</ChoiceButton>
  };
  let checkButton;
  if(this.props.heroButtonLink !== "#"){
    checkButton = 
    <ScrollAnimation style={buttonAnimate} className={this.props.heroButtonAnimate}>
    <a href={this.props.heroButtonLink} target={this.props.heroButtonLinkTarget}>{button}</a>
    </ScrollAnimation > 
  }else{
    checkButton = 
    <ScrollAnimation style={buttonAnimate} className={this.props.heroButtonAnimate}>
    {button}
    </ScrollAnimation > 
  };
    return (
    <div>
        <Grid style={{backgroundColor:this.props.herobackgroundColor}}container spacing={0}>
         <Grid item xs={12} sm={6}>
            <div style={content}>
            <ScrollAnimation style={title} className={this.props.heroTitleAnimate} >
            {this.props.heroTitle}
            </ScrollAnimation> 
            <ScrollAnimation style={description} className={this.props.heroDescriptionAnimate} >
            {this.props.heroDescription}
            </ScrollAnimation> 
            {checkButton}
            </div>
        </Grid>
        <Grid item xs={12} sm={6}>
        <div style={background}></div> 
        </Grid>
       
        </Grid>  
        </div>
    );
  }
}

export default connect()(HeroNo2);

const ChoiceButton = styled.button`
  position: relative;
  height: 60px;
  width: 200px;
  margin: 10px 7px;
  padding: 5px 5px;
  font-style:${props=> props.FontStyle}
  font-family:${props => props.FontFamily};
  font-weight: ${props => props.FontWeight};
  font-size: ${props => props.FontSize};
  letter-spacing: 2px;
  color: ${props => props.buttonColor};
  border: 2px ${props => props.buttonBDColor} solid;
  border-radius: ${props => props.buttonRadius};
  text-transform: uppercase;
  outline: 0;
  overflow:hidden;
  background: ${props => props.buttonBGColor};
  z-index: 1;
  cursor: pointer;
  transition:         0.09s ease-in;
  -o-transition:      0.09s ease-in;
  -ms-transition:     0.09s ease-in;
  -moz-transition:    0.09s ease-in;
  -webkit-transition: 0.09s ease-in;
  :hover{
    border: 2px ${props => props.buttonHBDColor} solid; 
    color:${props => props.buttonHoverColor}
  }
  .fillUp&{
    :hover {
      color:  ${props => props.buttonHoverColor};
    }
    :before {
      content: "";
      position: absolute;
      background: ${props => props.buttonHBGColor};
      bottom: 0;
      left:0 ;
      right: 0;
      top: 100%;
      z-index: -1;
      -webkit-transition: all 0.09s ease-in;

    }
    :hover:before {
      top: 0;
    }
  }
  .fillDown&{
    :hover {
      color: ${props => props.buttonHoverColor};
    }
    :before {
      content: "";
      position: absolute;
      background: ${props => props.buttonHBGColor};
      bottom: 100%;
      left:0 ;
      right: 0;
      top: 0;
      z-index: -1;
      -webkit-transition: all 0.09s ease-in;

    }
    :hover:before {
      bottom: 0;
    }
  }
  .fillRight&{
    :hover {
      color: ${props => props.buttonHoverColor};
    }
    :before {
      content: "";
      position: absolute;
      background: ${props => props.buttonHBGColor};
      bottom: 0;
      left:0 ;
      right: 100%;
      top: 0;
      z-index: -1;
      -webkit-transition: all 0.09s ease-in;

    }
    :hover:before {
      right: 0;
    }
  }
  .fillLeft&{
    :hover {
      color: ${props => props.buttonHoverColor};;
    }
    :before {
      content: "";
      position: absolute;
      background: ${props => props.buttonHBGColor};
      bottom: 0;
      left:100% ;
      right: 0;
      top: 0;
      z-index: -1;
      -webkit-transition: all 0.09s ease-in;

    }
    :hover:before {
      left: 0;
    }
  }
  .fillMiddle&{
    :hover {
      color: ${props => props.buttonHoverColor};;
    }
    :before {
      content: "";
      position: absolute;
      background: ${props => props.buttonHBGColor};
      bottom: 50%;
      left:0 ;
      right: 0;
      top: 50%;
      z-index: -1;
      -webkit-transition: all 0.09s ease-in;

    }
    :hover:before {
      top: 0;
      bottom: 0;
    }
  }
  .fillOblique&{
    :hover {
      color: ${props => props.buttonHoverColor};;
    }
    :before {
      content: "";
      position: absolute;
      background:${props => props.buttonHBGColor};
      bottom: 0;
      left:50% ;
      right: 50%;
      top: 0;
      z-index: -1;
      -webkit-transition: all 0.09s ease-in;

    }
    :hover:before {
      left: 0;
      right: 0;
    }
  }
  .fillOn&{
    :hover {
      color: ${props => props.buttonHoverColor};;
    }
    :before {
      content: "";
      position: absolute;
      background:${props => props.buttonHBGColor};
      bottom: 50%;
      left:50% ;
      right: 50%;
      top: 50%;
      z-index: -1;
      -webkit-transition: all 0.09s ease-in;

    }
    :hover:before {
      top: 0;
      bottom: 0;
      left:0 ;
      right: 0;
    }
  }
  .arrow&{
    text-align:left;
    padding-left:17px;
    :before{
      content:"→";
      position:absolute;
      color:${props => props.buttonHoverColor};
      left: 83%;

      opacity: 0;
      -webkit-transition: all 250ms cubic-bezier(0.680, -0.550, 0.265, 1.550); 
    }
    :hover:before{
      left:84%;
      opacity:1;
    }
    :hover {
      width:170px;
      background:${props => props.buttonHBGColor};
    }
  }
  .slide&{
    :after{
      content: '${props => props.content}';
      position:absolute;
      width:100%;
      height:100%;
      left:0;
      text-align:center;
      -webkit-transition: all 400ms cubic-bezier(0.680, -0.550, 0.265, 1.550); 
    }
    :before {
      content:'${props => props.swapContent}';
      height:100%;
      width:100%;
      position:absolute;
      color:${props => props.buttonColor};
      left:-100%;
      opacity: 0;
      -webkit-transition: all 500ms cubic-bezier(0.680, -0.550, 0.265, 1.550); 
    }
    :hover{
      background:${props => props.buttonHBGColor};
    }
    :hover:before{
      left:0;
      opacity:1;
      color:${props => props.buttonSwapColor};
    }
    :hover:after{
      left:100%;
      opacity:0;
    }
  }
  .slideLeft&{
    :after{
      content:'${props => props.content }';
      position:absolute;
      width:100%;
      height:100%;
      left:0;
      text-align:center;
      -webkit-transition: all 400ms cubic-bezier(0.680, -0.550, 0.265, 1.550); 
    }
    :before {
      content:'${props => props.swapContent}';
      height:100%;
      width:100%;
      position:absolute;
      opacity: 1;
      left:100%;
      color:${props => props.buttonColor};
      -webkit-transition: all 425ms cubic-bezier(0.680, -0.550, 0.265, 1.550); 
    }
    :hover{
      background:${props => props.buttonHBGColor};
    }
    :hover:before{
      left:0;
      color:${props => props.buttonSwapColor};
    }
    :hover:after{
      left:100%;
      opacity:0;
    }
  }
`;