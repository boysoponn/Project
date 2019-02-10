import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import './../tamplateCSS/menubar.css';
import { Link} from 'react-router-dom';

const styles = theme => ({
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
    const { classNamees} = this.props;
    return (
      <div classNameName='footer1'>
        <footer className="flex-rw">
          <section className="footer-social-section flex-rw">
              <span className="footer-social-overlap footer-social-connect">
              CONNECT US
              </span>
              <span className="footer-social-overlap footer-social-icons-wrapper">
              <a href="https://www.pinterest.com/paviliongift/" className="generic-anchor" target="_blank" title="Pinterest" itemprop="significantLink"><i className="fa fa-pinterest"></i></a>
              <a href="https://www.facebook.com/paviliongift" className="generic-anchor" target="_blank" title="Facebook" itemprop="significantLink"><i className="fa fa-facebook"></i></a>
              <a href="https://twitter.com/PavilionGiftCo" className="generic-anchor" target="_blank" title="Twitter" itemprop="significantLink"><i className="fa fa-twitter"></i></a>
              <a href="http://instagram.com/paviliongiftcompany" className="generic-anchor" target="_blank" title="Instagram" itemprop="significantLink"><i className="fa fa-instagram"></i></a>
              <a href="https://www.youtube.com/channel/UCYgUODvd0qXbu_LkUWpTVEg" className="generic-anchor" target="_blank" title="Youtube" itemprop="significantLink"><i className="fa fa-youtube"></i></a>
              <a href="https://plus.google.com/+Paviliongift/posts" className="generic-anchor" target="_blank" title="Google Plus" itemprop="significantLink"><i className="fa fa-google-plus"></i></a>
              </span>
          </section>
          <section className="footer-bottom-section flex-rw">
            <div className="footer-bottom-wrapper">   
              <p>2015 Pavilion in</p>
            </div>
            <div className="footer-bottom-wrapper">
              {this.props.footerContent.map((footer)=>
                footer.link.search("http") === -1?
                  <Link to={footer.link} target={footer.linkTarget}  className="generic-anchor">{footer.label}<span> | </span></Link>  
                  :<a href={footer.link} target={footer.linkTarget}  className="generic-anchor">{footer.label}<span> | </span></a>  
                )}
            </div>
          </section>
        </footer>
    </div>
    );
  }
}

export default withStyles(styles)(FooterNo1);
