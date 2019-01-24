import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Facebook from '../../image/facebook.png';
import Youtube from '../../image/youtube.png';
import Twitter from '../../image/twitter.png';
import Grid from '@material-ui/core/Grid';
import ScrollAnimation from 'react-animate-on-scroll';
import styled from 'styled-components'


const styles = theme => ({
  root: {
    // height:'100%'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  img:{
    width:40,
    padding:5
  }
});


class FooterNo1 extends React.Component {
constructor(props){
  super(props);
  this.state={

  }
}
  render() { 
    const content={
      textAlign: 'center',
      backgroundColor:this.props.footerbackgroundColor,
  };
  const title ={
      color:this.props.footerTitleColor,
      opacity: 1,
      animationDuration: this.props.footerTitleDuration,
      fontFamily:this.props.footerTitleFontFamily,
      fontSize:this.props.footerTitleFontSize,
      fontWeight:this.props.footerTitleFontWeight,
      fontStyle:this.props.footerTitleFontStyle,
      display:this.props.footerTitleStatus
  };
  const description={
      opacity: 1,
      color:this.props.footerDescriptionColor,
      animationDuration: this.props.footerDescriptionDuration,
      fontFamily:this.props.footerDescriptionFontFamily,
      fontSize:this.props.footerDescriptionFontSize,
      fontWeight:this.props.footerDescriptionFontWeight,
      fontStyle:this.props.footerDescriptionFontStyle,
      display:this.props.footerDescriptionStatus,
      padding:' 0 50 0 50',
      wordWrap: 'break-word'
  };
    const { classes} = this.props;
    return (
      <div className={classes.root}>
      <Grid style={content}container spacing={24}>
        <Grid item xs={9}>
          <ScrollAnimation style={title} className={this.props.footerTitleAnimate} >
            {this.props.footerTitle}
            </ScrollAnimation> 
            <ScrollAnimation style={description} className={this.props.footerDescriptionAnimate} >
            {this.props.footerDescription}
          </ScrollAnimation> 
          <div style={{display:'inline'}}>
          {this.props.footerContent.map((footer)=>
          // {footer.link  ?
           <a href={footer.link} target={footer.target} 
           style={{
             padding:5,
             color:footer.Color,
             animationDuration: footer.Duration,
             fontFamily:footer.FontFamily,
             fontSize:footer.FontSize,
             fontWeight:footer.FontWeight,
             fontStyle:footer.FontStyle,
             display:footer.Status
          }}>
          {footer.label}</a>
          //  :
          //  <a>{footer.label}</a>
          //   }
          )}
          </div>
        </Grid>
        <Grid item xs={3}>  
        <a href="#"><img className={classes.img}  src={Facebook} alt="Facebook" /></a>
        <a href="#"><img className={classes.img}  src={Youtube} alt="Youtube"/></a>
        <a href="#"><img className={classes.img}  src={Twitter} alt="Twitter"/></a>
        </Grid>
      </Grid>
    </div>
    );
  }
}

export default withStyles(styles)(FooterNo1);
