import React from 'react';
import { Carousel } from 'antd';
import './../tamplateCSS/carousel.css';


class CarouselNo1 extends React.Component {

  render() {
    const background ={
        height:800,
        margin:'-1'
    };

    return (
        <div style={background}> 
            <Carousel  effect="fade" autoplay={this.props.carouselAutoplay} vertical={this.props.carouselVertical}  speed={this.props.carouselSpeed} dots={this.props.carouselDots} pauseOnHover= {this.props.carouselPauseOnHover}>
            {this.props.carouselContent.map((post => (
                <div key={post._key}>
                    <div style={{
                          backgroundImage:"url("+post.image+")",
                          height:'800',
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