import React from 'react';
import styled from 'styled-components'
import { Link} from 'react-router-dom';
import './../tamplateCSS/menubar.css';

class MenubarNo2 extends React.Component {
constructor(props){
  super(props);
  this.state={
    active:false
  }
}
 handleClick=()=>{
     this.setState({active:!this.state.active})
 }
  render() { 
    let active='';
    if(this.state.active){active=' nav-active'}
    return (
      <Div>
      <Header color={this.props.menubarbackgroundColor}>
      <Navbar >
      <Moblie>
      <div className={"body"+active}>
        <div className="menu-icon" style={{left:'unset',right:50,top:'2vh'}}onClick={this.handleClick}>
            <span style={{backgroundColor:'#000'}} className={"menu-icon__line menu-icon__line-left"+active}></span>
            <span style={{backgroundColor:'#000'}} className={"menu-icon__line"+active}></span>
            <span style={{backgroundColor:'#000'}} className={"menu-icon__line menu-icon__line-right"+active}></span>
        </div>
        <div className="nav">
            <div className="nav__content">
                <ul className="nav__list">
                {this.props.menubarItem.map((menubar) =>
                    menubar.link  || menubar.link !== "#" ?
                    menubar.link.search("http") === -1 && menubar.linkTarget !== '_blank'?
                    <li key={menubar._key} style={{fontSize:'calc('+menubar.FontSize+ 'vw / 10 )',}} className={"nav__list-item"+active}><Link 
                    style={{
                        color:menubar.Color,
                        fontFamily:menubar.FontFamily,
                        fontWeight:menubar.FontWeight,
                        fontStyle:menubar.FontStyle,
                     }}>
                    {menubar.label}</Link></li>
                    : 
                    <li key={menubar._key} style={{fontSize:'calc('+menubar.FontSize+ 'vw / 10 )'}} className={"nav__list-item"+active}><a 
                    style={{
                        color:menubar.Color,
                        fontFamily:menubar.FontFamily,
                        fontWeight:menubar.FontWeight,
                        fontStyle:menubar.FontStyle,
                    }}>
                    {menubar.label}</a></li> 
                    :
                    <li key={menubar._key} style={{fontSize:'calc('+menubar.FontSize+ 'vw / 10 )'}} className={"nav__list-item"+active}><a 
                    style={{
                        color:menubar.Color,
                        fontFamily:menubar.FontFamily,
                        fontWeight:menubar.FontWeight,
                        fontStyle:menubar.FontStyle,
                    }}>
                    {menubar.label}</a></li> 
                    )}
                </ul>
            </div>
        </div>
    </div>
    </Moblie>
        <Nav >
          {this.props.menubarItem.map((menubar)=>
          <Item key={menubar._key}>
            {menubar.link  && menubar.link !== "#" ?
            menubar.link.search("http") === -1 && menubar.linkTarget !== '_blank'?
            <A2><Link  
            style={{
              padding:5,
              color:menubar.Color,
              animationDuration: menubar.Duration,
              fontFamily:menubar.FontFamily,
              fontSize:'calc('+menubar.FontSize+ 'vw / 15 )',
              fontWeight:menubar.FontWeight,
              fontStyle:menubar.FontStyle,
              display:menubar.Status
           }}
            >{menubar.label}</Link></A2>
            :
            <A 
            style={{
              padding:5,
              color:menubar.Color,
              animationDuration: menubar.Duration,
              fontFamily:menubar.FontFamily,
              fontSize:'calc('+menubar.FontSize+ 'vw / 15 )',
              fontWeight:menubar.FontWeight,
              fontStyle:menubar.FontStyle,
              display:menubar.Status
           }}
            >{menubar.label}</A>
            :
            <A            
            style={{
              padding:5,
              color:menubar.Color,
              animationDuration: menubar.Duration,
              fontFamily:menubar.FontFamily,
              fontSize:'calc('+menubar.FontSize+ 'vw / 15 )',
              fontWeight:menubar.FontWeight,
              fontStyle:menubar.FontStyle,
              display:menubar.Status
           }}>{menubar.label}</A>
          }
          </Item> 
          )}
        </Nav>
        <Logo>
          <img style={{height:'100%'}}src={this.props.menubarLogo} alt="logo"/>
        </Logo>
      </Navbar>
          </Header>
      </Div>
    );
  }
}
export default MenubarNo2;
const Div = styled.div`
position: relative;
top: 0;
margin: 0;
padding: 0;
width: 100%;
`; 
const Header = styled.div`
position: fixed;
top: 0;
width: 100%;
z-index: 10;
background-color:${props=> props.color};
box-shadow: 0px 2px 2px ${props=> props.color};
`; 
const Moblie = styled.div`
display:none;
@media screen and (max-width: 600px) {
	display: block;
}
`; 

const Navbar = styled.div`
position: relative;
width: 100%;
transition: 0.5s ease;
margin: 10 0 0 0;
height: 8vh
`; 
const Nav = styled.div`
margin: 0;
padding: 0;
display: inline-block;
float: right;
margin-right: 5%;
@media screen and (max-width: 600px) {
	display: none;
}
`; 
const Item = styled.div`
list-style: none;
display: inline-block;
padding: 5px;
font-weight: 300;
line-height: 80px;
margin-right: 20px;
transition: 0.5s ease;
`; 
const A = styled.a`
display: inline-block;
height: 40px;
line-height: 30px;
padding: 5px;
transition: 0.5s ease;
text-decoration: none;
color: inherit;
`; 

const A2 = styled.p`
display: inline-block;
height: 40px;
line-height: 30px;
padding: 5px;
transition: 0.5s ease;
text-decoration: none;
color: inherit;
`; 

const Logo = styled.div`
float: left;
display: inline-block;
margin-left: 5%;
height: auto;
transition: 0.5s ease;
`; 
