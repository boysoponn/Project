import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Carousel } from 'antd';
import './../tamplateCSS/carousel.css';
import Grid from '@material-ui/core/Grid';

class CarouselNo1 extends React.Component {

  render() {
    const background ={
        padding:'5% 10% 2.5% 10%',
        backgroundColor:this.props.carouselBackgroundColor,
        position:'relative',
    };
    const content={
        paddingInlineStart: '2%',
        paddingInlineEnd: '5%'
    };
	const title ={
		color:this.props.carouselTitleColor,
		opacity: 1,
		animationDuration: this.props.carouselTitleDuration,
		fontFamily:this.props.carouselTitleFontFamily,
        fontSize:'calc('+this.props.carouselTitleFontSize+ 'vw / 15 )',
		fontWeight:this.props.carouselTitleFontWeight,
		fontStyle:this.props.carouselTitleFontStyle,
        display:this.props.carouselTitleStatus,
        textAlign: this.props.carouselTitlePosition,
	};
	const description={
		opacity: 1,
		color:this.props.carouselDescriptionColor,
		animationDuration: this.props.carouselDescriptionDuration,
		fontFamily:this.props.carouselDescriptionFontFamily,
        fontSize:'calc('+this.props.carouselDescriptionFontSize+ 'vw / 15 )',
		fontWeight:this.props.carouselDescriptionFontWeight,
		fontStyle:this.props.carouselDescriptionFontStyle,
        display:this.props.carouselDescriptionStatus,
        textAlign: this.props.carouselDescriptionPosition,
    };

    return (
 
            <Grid style={background} container spacing={0}>
         <Grid item xs={12} sm={6} style={content}>
            <ScrollAnimation style={title} className={this.props.carouselTitleAnimate}>{this.props.carouselTitle}</ScrollAnimation> 
            <ScrollAnimation style={description} className={this.props.carouselDescriptionAnimate} >{this.props.carouselDescription} </ScrollAnimation> 
            </Grid>
            <Grid item xs={12} sm={6}>
            <Carousel  className='slick-slide2' autoplay={this.props.carouselAutoplay} vertical={this.props.carouselVertical}  speed={this.props.carouselSpeed} dots={this.props.carouselDots} pauseOnHover= {this.props.carouselPauseOnHover}>
            {this.props.carouselContent.map((post => (
                <div key={post._key}>
                    <div style={{        
                        backgroundImage:"url("+post.image+")",
                        height:'400',
                        backgroundSize:'cover', 
                        backgroundPosition: 'center center',
                        backgroundRepeat:  'no-repeat'
                        }} key={post._key}>
                      <h1 style={{
                        position: 'absolute',
                        top:' 50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color:post.titleColor,
                        fontFamily:post.titleFontFamily,
                        fontSize:'calc('+post.titleFontSize+ 'vw / 15 )',
                        fontWeight:post.titleFontWeight,
                        fontStyle:post.titleFontStyle,
                        display:post.titleStatus,
                      }}>{post.title}</h1>
                      <p style={{        
                          position: 'absolute',
                            top:' 70%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            color:post.descriptionColor,
                            fontFamily:post.descriptionFontFamily,
                            fontSize:'calc('+post.descriptionFontSize+ 'vw / 15 )',
                            fontWeight:post.descriptionFontWeight,
                            fontStyle:post.descriptionFontStyle,
                            display:post.descriptionStatus, 
                        }}>{post.description}</p>
                      </div>
                </div>
            )))}
            </Carousel>
            </Grid>
        </Grid>
    );
  }
}

export default CarouselNo1;