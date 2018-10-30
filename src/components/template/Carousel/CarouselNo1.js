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
    let h1;
    this.props.carousel.map((post => (
    h1={
        color:post.carouselTitleColor,
        position: 'absolute',
        textAlign: 'center',
        top:' 50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }
    )))

    return (
        <div style={background}> 
            <Carousel autoplay speed='1000' dots={true} pauseOnHover= {false}>
            {this.props.carousel.map((post => (
                <div key={post._key}>
                    <img style={img}src={post.image}/>
                     <h1 style={h1}>{post.title}</h1>
                </div>
                )))}
            </Carousel>
        </div>
    );
  }
}

export default CarouselNo1;