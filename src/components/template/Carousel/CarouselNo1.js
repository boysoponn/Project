import React from 'react';
import { Carousel } from 'antd';
import './h.css';


class CarouselNo1 extends React.Component {
    constructor(props){  
      super(props);
          this.state = {
            posts : [
                {id: 1, title: 'Hello World', content: 'Welcome to learning React!', image:"https://i.lnwfile.com/05662c.jpg"},
                {id: 2, title: 'Installation', content: 'You can install React from npm.', image:"https://i.lnwfile.com/05662c.jpg"}
              ]
          };   
      }


  render() {
    const background ={
        backgroundColor:'blue',
        height:1500
    };

    return (
        <div style={background}> 
            <Carousel autoplay>
            {this.state.posts.map((post => (
                <div >
                        <h1>{post.title}</h1>
                </div>
                )))}
            </Carousel>,
        </div>
    );
  }
}

export default CarouselNo1;
