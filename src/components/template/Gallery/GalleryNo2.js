import React from 'react';
import styled from 'styled-components'
import '../tamplateCSS/hoverImage.css'
import ScrollAnimation from 'react-animate-on-scroll';

class GalleryNo2 extends React.Component {
    constructor(props){  
      super(props);
          this.state = {
          };   
      }
  render() {
	const background={
		paddingBottom:'10%',
		paddingTop:'10%',
		backgroundColor:this.props.galleryBackgroundColor,
		textAlign: 'center',
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
			<ScrollAnimation style={title} className={this.props.galleryTitleAnimate} >{this.props.galleryTitle}</ScrollAnimation> 
			<ScrollAnimation style={description} className={this.props.galleryDescriptionAnimate}>{this.props.galleryDescription}</ScrollAnimation> 
			<Grid>
				{this.props.galleryContent.map((post) => 
			
					<Figure style={{width:'31.3%'}} className={'effect-'+post.galleryHover}>	
						<Img Src={"url("+post.image+")"}/>
						<Figcaption>
							<div>
								<H2
								size={post.titleFontSize}
								weight={post.titleWeight}
								color={post.titleColor}
								status={post.titleStatus}
								family={post.titleFontWeight}
								fontStyle={post.titleFontStyle}
								>{post.title}</H2>
								<P
								size={post.descriptionFontSize}
								weight={post.descriptionWeight}
								color={post.descriptionColor}
								status={post.descriptionStatus}
								family={post.descriptionFontFamily}
								fontStyle={post.descriptionFontStyle}
								>{post.description}</P>
							</div>
							{post.link === '#'? null:<A href={post.link} target={post.linkTarget}></A>}
						</Figcaption>			
					</Figure>
					
				)}
			</Grid>
		</div>
    );
  }
}

export default GalleryNo2;

const Grid = styled.div`
position: relative;
margin: 0 auto;
padding: 1em 0 4em;
list-style: none;
text-align: center;
display: inline-block;
width:100%;
`; 

const Figure = styled.figure`
position: relative;
float: left;
overflow: hidden;
margin: 10px 1%;
width:100%;
height: 500;
// width: ${props => props.width};
text-align: center;
cursor: pointer;
`;

const Img = styled.div`
background-image:${props => props.Src};
position: relative;
height: 100%; 
background-position: center;
background-repeat: no-repeat;
background-size: 100%;
`;
const Figcaption = styled.figcaption`
padding: 2em;
color: #fff;
text-transform: uppercase;
font-size: 1.25em;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
:before,:after{
	pointer-events: none;
}
`;

const A = styled.a`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 1000;
text-indent: 200%;
white-space: nowrap;
font-size: 0;
opacity: 0;
`;

const H2 = styled.h2`
word-spacing: -0.15em;
font-weight: ${props => props.weight};
margin: 0;
font-size: ${props => props.size};
display: ${props => props.status};
font-family: ${props => props.family};
font-style:${props => props.fontStyle};
color:${props => props.color};
`;

const P = styled.p`
margin: 0;
letter-spacing: 1px;
font-size: 68.5%;
font-size: ${props => props.size};
font-weight: ${props => props.weight};
color:${props => props.color};
display: ${props => props.status};
font-family: ${props => props.family};
font-style:${props => props.fontStyle};
`;

