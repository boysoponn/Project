import React from 'react';
import './../tamplateCSS/menubar.css';
import { Link} from 'react-router-dom';
import styled from 'styled-components'


class FooterNo2 extends React.Component {
constructor(props){
  super(props);
  this.state={

  }
}
  render() {
    const content={
      backgroundColor:this.props.footerbackgroundColor,
      textAlign:this.props.footerPosition,
      paddingInlineEnd: '20%',
      paddingInlineStart: '20%',
  
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
      paddingTop: '1%' 
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
      <div style={content}>
      <p style={title}>{this.props.footerTitle}</p>
      <p style={description}>{this.props.footerDescription}</p>
            <div style={{margin: 0,paddingTop: '1%'}}>
              {this.props.footerItem.map((footer)=>
                footer.link  && footer.link !=="#" ?
                footer.link.search("http") === -1 && footer.linkTarget !== '_blank'?
                  <Link to={footer.link}  key={footer._key} 
                  style={{
                    color:footer.Color,
                    fontFamily:footer.FontFamily,
                    fontWeight:footer.FontWeight,
                    fontStyle:footer.FontStyle,
                    fontSize:'calc('+footer.FontSize+ 'vw / 15 )',
                 }}
                  >{footer.label}{this.props.footerItem.length===1?null:<span> | </span>}</Link>  
                  :<a href={footer.link} target={footer.linkTarget} key={footer._key} 
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
            <div>
            {this.props.footerSocial.map((footer)=>
                footer.Status === 'none' ? null:
                footer.link  && footer.link !=="#" ?
                footer.link.search("http") === -1 && footer.linkTarget !== '_blank'?
                <Link to={footer.link}  key={footer._key}><I className={footer.label}
                color={footer.Color}
                FontStyle={footer.FontStyle}
                FontSize={'calc('+footer.FontSize+ 'vw / 15 )'}
                hover={footer.hover}
                ></I></Link>
                  :<a href={footer.link}  key={footer._key} target={footer.linkTarget} ><I className={footer.label}
                  color={footer.Color}
                  FontStyle={footer.FontStyle}
                  FontSize={'calc('+footer.FontSize+ 'vw / 15 )'}
                  hover={footer.hover}
                ></I></a>
                :<a key={footer._key} ><I className={footer.label}
                  color={footer.Color}
                  FontStyle={footer.FontStyle}
                  FontSize={'calc('+footer.FontSize+ 'vw / 15 )'}
                  hover={footer.hover}
                ></I></a>
              )}
            </div>
    </div>
    );
  }
}

export default FooterNo2;

const I = styled.i`
padding:1%;
color:${props=> props.color};
font-style:${props=> props.FontStyle};
font-Size:${props=> props.FontSize};
:hover{
  color:${props => props.hover};
}
`; 