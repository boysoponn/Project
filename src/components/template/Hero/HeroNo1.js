import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { connect } from 'react-redux'

class HeroNo1 extends React.Component {
    constructor(props){  
      super(props);
          this.state = {
          };   
      }


  render() {
    const background ={
        backgroundImage:"url("+this.props.ImagePick+")",
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment:'fixed',
        minHeight:600,
        margin:0
    };
    const title ={
        textAlign:'center',
        marginTop:0,
        marginBottom:0,
        paddingTop:200,
        color:'#fff',
        opacity: 1,
        animationDuration: this.props.duration,
        fontFamily:this.props.FontFamily,
        fontSize:this.props.FontSize,
        fontWeight:this.props.FontWeight,
        fontStyle:this.props.FontStyle,
        display:this.props.Status
    }
    const description={
        textAlign:'center',
        opacity: 1,
        color:'#fff',
        animationDuration: this.props.durationDescription,
        fontFamily:this.props.FontFamilyDescription,
        fontSize:this.props.FontSizeDescription,
        fontWeight:this.props.FontWeightDescription,
        fontStyle:this.props.FontStyleDescription,
        display:this.props.StatusDescription
    }
    return (
        <div style={background}>   
         <ScrollAnimation style={title} className={this.props.animate} >
          {this.props.title}
        </ScrollAnimation> 
        <ScrollAnimation style={description} className={this.props.animateDescription} >
          {this.props.description}
        </ScrollAnimation> 
        </div>
    );
  }
}



export default connect()(HeroNo1);
