import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Carousel } from 'antd';
import './../tamplateCSS/carousel2.css';


class CarouselNo1 extends React.Component {

  render() {
    const background ={
        padding:'10%',
        backgroundColor:this.props.carouselBackgroundColor,
		textAlign: 'center',
    };

	const title ={
		color:this.props.carouselTitleColor,
		opacity: 1,
		animationDuration: this.props.carouselTitleDuration,
		fontFamily:this.props.carouselTitleFontFamily,
		fontSize:this.props.carouselTitleFontSize,
		fontWeight:this.props.carouselTitleFontWeight,
		fontStyle:this.props.carouselTitleFontStyle,
		display:this.props.carouselTitleStatus
	};
	const description={
		opacity: 1,
		color:this.props.carouselDescriptionColor,
		animationDuration: this.props.carouselDescriptionDuration,
		fontFamily:this.props.carouselDescriptionFontFamily,
		fontSize:this.props.carouselDescriptionFontSize,
		fontWeight:this.props.carouselDescriptionFontWeight,
		fontStyle:this.props.carouselDescriptionFontStyle,
		display:this.props.carouselDescriptionStatus
    };
    
    return (
        <div style={background}> 
            <ScrollAnimation style={title} className={this.props.carouselTitleAnimate} >
            {this.props.carouselTitle}
            </ScrollAnimation> 
            <ScrollAnimation style={description} className={this.props.carouselDescriptionAnimate} >
            {this.props.carouselDescription}
            </ScrollAnimation> 
            <Carousel   autoplay={this.props.carouselAutoplay} vertical={this.props.carouselVertical}  speed={this.props.carouselSpeed} dots={this.props.carouselDots} pauseOnHover= {this.props.carouselPauseOnHover}>
            {this.props.carouselContent.map((post => (
                <div key={post._key}>
                    <div style={{
                          backgroundImage:"url("+post.image+")",
                          height:'400',
                          backgroundSize:'cover', 
                          backgroundPosition: 'center center',
                          backgroundRepeat:  'no-repeat',}} key={post._key}>
                      <h1 style={{
                        position: 'absolute',
                        top:' 50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color:post.carouselTitleColor,
                        fontFamily:post.carouselTitleFontFamily,
                        fontSize:post.carouselTitleFontSize,
                        fontWeight:post.carouselTitleFontWeight,
                        fontStyle:post.carouselTitleFontStyle,
                        display:post.carouselTitleStatus,
                      }}>{post.title}</h1>
                      <p 
                      style={{
                        position: 'absolute',
                        top:' 70%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color:post.carouselDescriptionColor,
                        fontFamily:post.carouselDescriptionFontFamily,
                        fontSize:post.carouselDescriptionFontSize,
                        fontWeight:post.carouselDescriptionFontWeight,
                        fontStyle:post.carouselDescriptionFontStyle,
                        display:post.carouselDescriptionStatus, 
                      }}>{post.description}</p>
                      </div>
                </div>
            )))}
            </Carousel>
        </div>
    );
  }
}

export default CarouselNo1;