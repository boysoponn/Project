import React from 'react';
import { Carousel } from 'antd';
import './../tamplateCSS/h.css';


class CarouselNo1 extends React.Component {
    constructor(props){  
      super(props);
          this.state = {
        
          };   
      }

  render() {
    const background ={
        height:700,
    };
    const img={
        width:'100%',
        height:'500px',
    };
    const ss={
        position: 'absolute',
        top:' 50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    };
    return (
        <div style={background}> 
            <Carousel autoplay speed='1000' dots={true} pauseOnHover= {false}>
            {this.props.carousel.map((post => (
                <div key={post._key}>
                    <img style={img}src={post.image}/>
                    <div  >
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