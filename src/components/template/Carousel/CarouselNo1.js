import React from 'react';
import styled from 'styled-components'
import { Carousel } from 'antd';
import './h.css';
import 'antd/dist/antd.css';  

class CarouselNo1 extends React.Component {
    constructor(props){  
      super(props);
          this.state = {
            posts : [
                {id: 1, title: 'Hello World', content: 'Welcome to learning React!', image:"https://i.2th.me/a/i/hazbc7vc/2th.me_816817.png"},
                {id: 2, title: 'Installation', content: 'You can install React from npm.', image:"https://wallpaper.campus-star.com/app/uploads/2017/09/wallpaper-n-40.jpg"}
              ]
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
    const h1={
        color:'#fff',
        position: 'absolute',
        textAlign: 'center',
        top:' 50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    };
    return (
        <div style={background}> 
            <Carousel autoplay>
            {this.state.posts.map((post => (
                <div>
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