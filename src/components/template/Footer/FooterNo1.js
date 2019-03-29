import React from 'react';
import './../tamplateCSS/menubar.css';
import { Link} from 'react-router-dom';
import styled from 'styled-components'


class FooterNo1 extends React.Component {
constructor(props){
  super(props);
  this.state={

  }
}
  render() { 
    const content={
      backgroundColor:this.props.footerbackgroundColor,
  };
  const title ={
      color:this.props.footerTitleColor,
      backgroundColor:this.props.footerbackgroundColor,
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
    return (
      <div style={content} className='footer1'>
        <footer className="flex-rw">
          <section className="footer-social-section flex-rw">
              <span style={title} className="footer-social-overlap footer-social-connect">
              {this.props.footerTitle}
              </span>
              <span style={content} className="footer-social-overlap footer-social-icons-wrapper">
              {this.props.footerSocial.map((footer)=>
                footer.Status === 'none' ? null:
                footer.link  && footer.link !=="#" ?
                footer.link.search("http") === -1 && footer.linkTarget !== '_blank'?
                <a className="generic-anchor" key={footer._key} ><I className={footer.label}
                color={footer.Color}
                FontStyle={footer.FontStyle}
                FontSize={'calc('+footer.FontSize+ 'vw / 15 )'}
                hover={footer.hover}
                ></I></a>
                :
                <a className="generic-anchor" key={footer._key} ><I className={footer.label}
                  color={footer.Color}
                  FontStyle={footer.FontStyle}
                  FontSize={'calc('+footer.FontSize+ 'vw / 15 )'}
                  hover={footer.hover}
                ></I></a>
                :
                <a className="generic-anchor" key={footer._key} ><I className={footer.label}
                color={footer.Color}
                FontStyle={footer.FontStyle}
                FontSize={'calc('+footer.FontSize+ 'vw / 15 )'}
                hover={footer.hover}
                ></I></a>
              )}
              </span>
          </section>
          <section className="footer-bottom-section flex-rw">
            <div className="footer-bottom-wrapper" style={{width: '50%'}}>   
              <p style={description}>{this.props.footerDescription}</p>
            </div>
            <div className="footer-bottom-wrapper">
              {this.props.footerItem.map((footer)=>
                  footer.link  && footer.link !=="#" ?
                  footer.link.search("http") === -1 && footer.linkTarget !== '_blank'?
                  <a key={footer._key}  className="generic-anchor"
                  style={{
                    color:footer.Color,
                    fontFamily:footer.FontFamily,
                    fontWeight:footer.FontWeight,
                    fontStyle:footer.FontStyle,
                    fontSize:'calc('+footer.FontSize+ 'vw / 15 )',
                 }}
                  >{footer.label}{this.props.footerItem.length===1?null:<span> | </span>}</a>  
                  :<a key={footer._key}  className="generic-anchor"
                  style={{
                    color:footer.Color,
                    fontFamily:footer.FontFamily,
                    fontWeight:footer.FontWeight,
                    fontStyle:footer.FontStyle,
                 }}
                  >{footer.label}{this.props.footerItem.length===1?null:<span> | </span>}</a>  
                  :<a key={footer._key}  className="generic-anchor"
                  style={{
                    color:footer.Color,
                    fontFamily:footer.FontFamily,
                    fontWeight:footer.FontWeight,
                    fontStyle:footer.FontStyle,
                 }}
                  >{footer.label}{this.props.footerItem.length===1?null:<span> | </span>}</a>  
                )}
            </div>
          </section>
        </footer>
    </div>
    );
  }
}

export default FooterNo1;

const I = styled.i`
color:${props=> props.color};
font-style:${props=> props.FontStyle};
font-size:${props=> props.FontSize};
:hover{
  color:${props => props.hover};
}
`; 