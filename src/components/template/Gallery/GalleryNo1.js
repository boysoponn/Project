import React from 'react';
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll';

class GalleryNo1 extends React.Component {
    constructor(props){  
      super(props);
          this.state = {
          };   
      }
  render() {
    const background={
      paddingTop: 100,
      backgroundColor:this.props.galleryBackgroundColor,
      textAlign: 'center'
    }
    const title ={
      color:this.props.galleryTitleColor,
      opacity: 1,
      animationDuration: this.props.galleryTitleDuration,
      fontFamily:this.props.galleryTitleFontFamily,
      fontSize:this.props.galleryTitleFontSize,
      fontWeight:this.props.galleryTitleFontWeight,
      fontStyle:this.props.galleryTitleFontStyle,
      display:this.props.galleryTitleStatus
  };
  const description={
      opacity: 1,
      color:this.props.galleryDescriptionColor,
      animationDuration: this.props.galleryDescriptionDuration,
      fontFamily:this.props.galleryDescriptionFontFamily,
      fontSize:this.props.galleryDescriptionFontSize,
      fontWeight:this.props.galleryDescriptionFontWeight,
      fontStyle:this.props.galleryDescriptionFontStyle,
      display:this.props.galleryDescriptionStatus
  };
    return (
      <div style={background}>
        <ScrollAnimation style={title} className={this.props.galleryTitleAnimate} >
        {this.props.galleryTitle}
        </ScrollAnimation> 
        <ScrollAnimation style={description} className={this.props.galleryDescriptionAnimate} >
        {this.props.galleryDescription}
        </ScrollAnimation> 
        <Gallery > 
          {this.props.galleryContent.map((post) => 
            <Img className="img" key={post._key} src={post.image} alt="item" />
          )}
        </Gallery>
        </div>
    );
  }
}

export default GalleryNo1;

 const Gallery = styled.div`
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
 grid-gap: 2em;
 padding: 2em;
`; 

const Img = styled.img`
display: block;
max-width:100%;
// width:350px;
height:300px;
transition: 300ms 50ms;
transition: transform 400ms ease-out;
:hover{
  transform: scale(1.07);
}
`; 