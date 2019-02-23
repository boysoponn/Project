import React from 'react';
import '../../css/animate.min.css';
import HeroNo1 from './Hero/HeroNo1';
import HeroNo2 from './Hero/HeroNo2';
import HeroNo3 from './Hero/HeroNo3';
import MenubarNo1 from './Menubar/menubarNo1';
import MenubarNo2 from './Menubar/menubarNo2';
import MenubarNo3 from './Menubar/menubarNo3';
import CarouselNo1 from './Carousel/CarouselNo1';
import CarouselNo2 from './Carousel/CarouselNo2';
import GalleryNo1 from './Gallery/GalleryNo1';
import GalleryNo2 from './Gallery/GalleryNo2';
import GalleryNo3 from './Gallery/GalleryNo3';
import GalleryNo4 from './Gallery/GalleryNo4';
import FooterNo1 from './Footer/FooterNo1';
import FooterNo2 from './Footer/FooterNo2';
import FooterNo3 from './Footer/FooterNo3';

class IN extends React.Component {

  render() {
  const End={
    height:300,
    backgroundColor:'none',
  };
  let menubar;
  let Hero;
  let Carousel;
  let Gallery;
  let Footer;

  if( this.props.Menubar === "MenubarNo1"){
  menubar=<MenubarNo1
    {...this.props} 
  />
  }
  if( this.props.Menubar === "MenubarNo2"){
    menubar=<MenubarNo2
    {...this.props}
    />
  }
  if( this.props.Menubar === "MenubarNo3"){
    menubar=<MenubarNo3
    {...this.props}
    />
  }

  if( this.props.Hero === "HeroNo1"){
    Hero = <HeroNo1
      {...this.props}
    />
  }
  if( this.props.Hero === "HeroNo2"){
    Hero = <HeroNo2
    {...this.props}
    />
  }
  if( this.props.Hero === "HeroNo3"){
    Hero = <HeroNo3
    {...this.props}
    />
  }

  if( this.props.Carousel === "CarouselNo1"){
    Carousel = <CarouselNo1
    {...this.props}
    />
  }
  if( this.props.Carousel === "CarouselNo2"){
    Carousel = <CarouselNo2
    {...this.props}
    />
  }

  if( this.props.Gallery === "GalleryNo1"){
  Gallery =
  <GalleryNo1
  {...this.props}
  />
  }
  if( this.props.Gallery === "GalleryNo2"){
    Gallery =
    <GalleryNo2
    {...this.props}
    />
  }
  if( this.props.Gallery === "GalleryNo3"){
    Gallery =
    <GalleryNo3
    {...this.props}
    />
  }
  if( this.props.Gallery === "GalleryNo4"){
    Gallery =
    <GalleryNo4
    {...this.props}
    />
  }

  if( this.props.Footer === "FooterNo1"){
  Footer=<FooterNo1
  {...this.props}
  />
  }
  if( this.props.Footer === "FooterNo2"){
    Footer=<FooterNo2
    {...this.props}
    />
  }
  if( this.props.Footer === "FooterNo3"){
      Footer=<FooterNo3
      {...this.props}
      />
  }
return (
      <div style={{height:'100%'}}> 
      {menubar}  
      {Hero}
      {Carousel}
      {Gallery}
      {Footer}
      <div style={End}></div>
      </div>
);
  }
}



export default IN;
