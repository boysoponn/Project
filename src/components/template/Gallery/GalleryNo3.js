import React from 'react';
import { Link} from 'react-router-dom';
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
		padding: '2.5% 10% 10% ',
		backgroundColor:this.props.galleryBackgroundColor,
		position:'relative',
	  }

	const title ={
		color:this.props.galleryTitleColor,
		opacity: 1,
		animationDuration: this.props.galleryTitleDuration,
		fontFamily:this.props.galleryTitleFontFamily,
		fontSize:'calc('+this.props.galleryTitleFontSize+ 'vw / 15 )',
		fontWeight:this.props.galleryTitleFontWeight,
		fontStyle:this.props.galleryTitleFontStyle,
		display:this.props.galleryTitleStatus,
		textAlign: this.props.galleryTitlePosition,
	};
	const description={
		opacity: 1,
		color:this.props.galleryDescriptionColor,
		animationDuration: this.props.galleryDescriptionDuration,
		fontFamily:this.props.galleryDescriptionFontFamily,
		fontSize:'calc('+this.props.galleryDescriptionFontSize+ 'vw / 15 )',
		fontWeight:this.props.galleryDescriptionFontWeight,
		fontStyle:this.props.galleryDescriptionFontStyle,
		display:this.props.galleryDescriptionStatus,
		textAlign:this.props.galleryDescriptionPosition,
	};
    return (
		<div style={background}>
			<Content>
			<ScrollAnimation style={title} className={this.props.galleryTitleAnimate} >{this.props.galleryTitle}</ScrollAnimation> 
			<ScrollAnimation style={description} className={this.props.galleryDescriptionAnimate}>{this.props.galleryDescription}</ScrollAnimation> 
			</Content> 
			<Grid>
				{this.props.galleryContent.map((post) => 
			
					<Figure width='31.3%' className={'effect-'+post.galleryHover} key={post._key}>	
						<Img Src={"url("+post.image+")"}/>
						<Figcaption>
							<div>
								<H2
								size={post.titleFontSize}
								weight={post.titleWeight}
								color={post.titleColor}
								status={post.titleStatus}
								family={post.titleFontFamily}
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
							{post.link  && post.link !=="#" ? 
							post.link.search("http") === -1 && post.linkTarget !== '_blank'?
							<Link to={post.link}><A></A></Link>
							:<A href={post.link} target={post.linkTarget}></A>
							:null
							}
						</Figcaption>			
					</Figure>
					
				)}
			</Grid>
		</div>
    );
  }
}

export default GalleryNo2;

const Content = styled.div`
padding-bottom:5%;
`; 

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
width: ${props => props.width};
height: 500px;
text-align: center;
cursor: pointer;
@media screen and (max-width: 1024px) {
	width: 98%;
}
`;

const Img = styled.div`
background-image:${props => props.Src};
position: relative;
height: 100%; 
background-position: center;
background-repeat: no-repeat;
background-size:  cover;
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
font-size: calc(${props => props.size}vw / 15);
display: ${props => props.status};
font-family: ${props => props.family};
font-style:${props => props.fontStyle};
color:${props => props.color};
`;

const P = styled.p`
margin: 0;
letter-spacing: 1px;
font-size: 68.5%;
font-size: calc(${props => props.size}vw / 15);
font-weight: ${props => props.weight};
color:${props => props.color};
display: ${props => props.status};
font-family: ${props => props.family};
font-style:${props => props.fontStyle};
`;

