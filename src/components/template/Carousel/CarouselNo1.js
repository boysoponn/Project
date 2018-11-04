import React from 'react';
import { Carousel } from 'antd';
import './../tamplateCSS/carousel.css';


class CarouselNo1 extends React.Component {
    constructor(props){  
      super(props);
          this.state = {
        
          };   
      }

  render() {
    const background ={
        height:500,
    };

    return (
        <div style={background}> 
            <Carousel vertical={this.props.carouselVertical} autoplay={this.props.carouselAutoplay} speed={this.props.carouselSpeed} dots={this.props.carouselDots} pauseOnHover= {this.props.carouselPauseOnHover}>
            {this.props.carouselContent.map((post => (
                <div key={post._key}>
                    <div style={{
                          backgroundImage:"url("+post.image+")",
                          height:'500',
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