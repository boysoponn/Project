import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { connect } from 'react-redux'
import styled from 'styled-components'
class HeroNo1 extends React.Component {
    constructor(props){  
      super(props);
          this.state = {
          };   
      }

  render() {
    const background ={
        backgroundImage:"url("+this.props.heroImagePick+")",
        backgroundSize:'cover',
        height:'100%',
        margin:0
    };
    const content={
        textAlign: 'center',
        paddingTop: '20%',
    };
    const title ={
        color:this.props.heroTitleColor,
        opacity: 1,
        animationDuration: this.props.heroTitleDuration,
        fontFamily:this.props.heroTitleFontFamily,
        fontSize:this.props.heroTitleFontSize,
        fontWeight:this.props.heroTitleFontWeight,
        fontStyle:this.props.heroTitleFontStyle,
        display:this.props.heroTitleStatus
    };
    const description={
        opacity: 1,
        color:this.props.heroDescriptionColor,
        animationDuration: this.props.heroDescriptionDuration,
        fontFamily:this.props.heroDescriptionFontFamily,
        fontSize:this.props.heroDescriptionFontSize,
        fontWeight:this.props.heroDescriptionFontWeight,
        fontStyle:this.props.heroDescriptionFontStyle,
        display:this.props.heroDescriptionStatus
    };
    const button={
        opacity: 1,
        color:this.props.HeroDescriptionColor,
        animationDuration: this.props.heroDescriptionDuration,
        fontFamily:this.props.heroDescriptionFontFamily,
        fontSize:this.props.heroDescriptionFontSize,
        fontWeight:this.props.heroDescriptionFontWeight,
        fontStyle:this.props.heroDescriptionFontStyle,
        display:this.props.heroDescriptionStatus
    };
    return (
        <div style={background}>  
            <div style={content}>
            <ScrollAnimation style={title} className={this.props.heroTitleAnimate} >
            {this.props.heroTitle}
            </ScrollAnimation> 
            <ScrollAnimation style={description} className={this.props.heroDescriptionAnimate} >
            {this.props.heroDescription}
            </ScrollAnimation> 
            {/* <ScrollAnimation style={button} className={this.props.buttonAnimate} >
            <ChoiceButton content={this.props.button} swapContent={this.props.buttonSwap} className={this.props.buttonSelected}>{this.props.button}</ChoiceButton>
            </ScrollAnimation>  */}
            </div>
        </div> 
    );
  }
}

export default connect()(HeroNo1);



const ChoiceButton = styled.button`
position: relative;
  display:${props => props.display} ;
  height: 60px;
  width: 200px;
  margin: 10px 7px;
  padding: 5px 5px;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 2px;
  color: #383736;
  border: 2px #383736 solid;
  border-radius: 4px;
  text-transform: uppercase;
  outline: 0;
  overflow:hidden;
  background: none;
  z-index: 1;
  cursor: pointer;
  transition:         0.09s ease-in;
  -o-transition:      0.09s ease-in;
  -ms-transition:     0.09s ease-in;
  -moz-transition:    0.09s ease-in;
  -webkit-transition: 0.09s ease-in;
  .fillUp&{
    :hover {
      color: whitesmoke;
    }
    :before {
      content: "";
      position: absolute;
      background: #383736;
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
      color: whitesmoke;
    }
    :before {
      content: "";
      position: absolute;
      background: #383736;
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
      color: whitesmoke;
    }
    :before {
      content: "";
      position: absolute;
      background: #383736;
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
      color: whitesmoke;
    }
    :before {
      content: "";
      position: absolute;
      background: #383736;
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
      color: whitesmoke;
    }
    :before {
      content: "";
      position: absolute;
      background: #383736;
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
      color: whitesmoke;
    }
    :before {
      content: "";
      position: absolute;
      background: #383736;
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
      color: whitesmoke;
    }
    :before {
      content: "";
      position: absolute;
      background: #383736;
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
      color:#383736;
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
    }
  }
  .fade&{
    :before{
      content:"→";
      position:absolute;
      color:#383736;
      left: 88%;
      opacity: 0;
      -webkit-transition: all 0.2s ease-in;
    }
    :hover:before{
      left:91%;
      opacity:1;
    }
    :hover {
      border: 0px #fff solid;
      -webkit-transform: scale(1.04,1.04);
      -webkit-transition: border 0.3s ease-out;
      -webkit-transition: transform 250ms cubic-bezier(0.680, -0.550, 0.265, 1.550); 
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
      color:#383736;
      left:-100%;
      opacity: 0;
      -webkit-transition: all 500ms cubic-bezier(0.680, -0.550, 0.265, 1.550); 
    }
    :hover{
      background:#383736;
    }
    :hover:before{
      left:0;
      opacity:1;
      color:#fff;
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
      color:#383736;
      -webkit-transition: all 425ms cubic-bezier(0.680, -0.550, 0.265, 1.550); 
    }
    :hover{
      background:none;
    }
    :hover:before{
      left:0;
    }
    :hover:after{
      left:100%;
      opacity:0;
    }
  }
`;