import React from 'react';
import './../tamplateCSS/menubar.css';
import { Link} from 'react-router-dom';
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';

class FooterNo3 extends React.Component {
constructor(props){
  super(props);
  this.state={

  }
}
  render() { 
    const content={
      backgroundColor:this.props.footerbackgroundColor,
      textAlign:this.props.footerPosition,
      padding:'1%',
  };
  const title ={
      color:this.props.footerTitleColor,
      backgroundColor:this.props.footerbackgroundColor,
      opacity: 1,
      animationDuration: this.props.footerTitleDuration,
      fontFamily:this.props.footerTitleFontFamily,
      fontSize:'calc('+this.props.footerTitleFontSize+ 'vw / 15 )',
      fontWeight:this.props.footerTitleFontWeight,
      fontStyle:this.props.footerTitleFontStyle,
      display:this.props.footerTitleStatus,
      margin: 0,
  };
  const description={
      opacity: 1,
      margin: '0',
      color:this.props.footerDescriptionColor,
      animationDuration: this.props.footerDescriptionDuration,
      fontFamily:this.props.footerDescriptionFontFamily,
      fontSize:'calc('+this.props.footerDescriptionFontSize+ 'vw / 15 )',
      fontWeight:this.props.footerDescriptionFontWeight,
      fontStyle:this.props.footerDescriptionFontStyle,
      display:this.props.footerDescriptionStatus,
  };

    return (
      <Grid style={content} container spacing={0}>
      <Grid item xs={12} sm={6} style={{ paddingInlineEnd:'5%', paddingInlineStart: '5%'}}>
      <p style={title}>{this.props.footerTitle}</p>
      <p style={description}>{this.props.footerDescription}</p>
            <div style={{margin: 0,paddingTop: '1%'}}>
              {this.props.footerItem.map((footer)=>
                footer.link  && footer.link !=="#" ?
                footer.link.search("http") === -1 && footer.linkTarget !== '_blank'?
                  <Link key={footer._key}
                  style={{
                    color:footer.Color,
                    fontFamily:footer.FontFamily,
                    fontWeight:footer.FontWeight,
                    fontStyle:footer.FontStyle,
                    fontSize:'calc('+footer.FontSize+ 'vw / 15 )',
                 }}
                  >{footer.label}{this.props.footerItem.length===1?null:<span> | </span>}</Link>  
                  :<a key={footer._key}
                  style={{
                    color:footer.Color,
                    fontFamily:footer.FontFamily,
                    fontWeight:footer.FontWeight,
                    fontStyle:footer.FontStyle,
                 }}
                  >{footer.label}{this.props.footerItem.length===1?null:<span> | </span>}</a>  
                  :<a key={footer._key}
                  style={{
                    color:footer.Color,
                    fontFamily:footer.FontFamily,
                    fontWeight:footer.FontWeight,
                    fontStyle:footer.FontStyle,
                 }}
                  >{footer.label}{this.props.footerItem.length===1?null:<span> | </span>}</a>
                )}
            </div>
            </Grid>
            <Grid item xs={12} sm={6} style={{textAlign:'right', padding:'2%',paddingInlineEnd:'5%', paddingInlineStart: '5%'}}>
            {this.props.footerSocial.map((footer)=>
                footer.Status === 'none' ? null:
                footer.link  && footer.link !=="#" ?
                footer.link.search("http") === -1 && footer.linkTarget !== '_blank'?
                <Link style={{padding:'1%'}} key={footer._key} ><I className={footer.label}
                color={footer.Color}
                FontStyle={footer.FontStyle}
                FontSize={'calc('+footer.FontSize+ 'vw / 15 )'}
                hover={footer.hover}
                ></I></Link>
                :<a  style={{padding:'1%'}} key={footer._key}  ><I className={footer.label}
                color={footer.Color}
                FontStyle={footer.FontStyle}
                FontSize={'calc('+footer.FontSize+ 'vw / 15 )'}
                hover={footer.hover}
                ></I></a>
                :<a style={{padding:'1%'}} key={footer._key} ><I className={footer.label}
                  color={footer.Color}
                  FontStyle={footer.FontStyle}
                  FontSize={'calc('+footer.FontSize+ 'vw / 15 )'}
                  hover={footer.hover}
                ></I></a>
              )}
            </Grid>
    </Grid>
    );
  }
}

export default FooterNo3;

const I = styled.i`
padding:1%;
color:${props=> props.color};
font-style:${props=> props.FontStyle};
font-Size:${props=> props.FontSize};
:hover{
  color:${props => props.hover};
}
`; 