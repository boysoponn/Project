import React from 'react';
import styled from 'styled-components'

class MenubarNo2 extends React.Component {
constructor(props){
  super(props);
  this.state={

  }
}
  render() { 
    return (
      <Div>
      <Header color={this.props.menubarbackgroundColor}>
      <Navbar >
        <Nav >
          {this.props.menubarContent.map((menubar)=>
          <Item key={menubar._key}>
            {menubar.link === ''?
            <A            
            style={{
              padding:5,
              color:menubar.Color,
              animationDuration: menubar.Duration,
              fontFamily:menubar.FontFamily,
              fontSize:menubar.FontSize,
              fontWeight:menubar.FontWeight,
              fontStyle:menubar.FontStyle,
              display:menubar.Status
           }}>{menubar.label}</A>
            :
            <A href={menubar.link} target={menubar.linkTarget} 
            style={{
              padding:5,
              color:menubar.Color,
              animationDuration: menubar.Duration,
              fontFamily:menubar.FontFamily,
              fontSize:menubar.FontSize,
              fontWeight:menubar.FontWeight,
              fontStyle:menubar.FontStyle,
              display:menubar.Status
           }}
            >{menubar.label}</A>
          }
          </Item> 
          )}
        </Nav>
        <Logo>
          <img style={{height:80}}src={this.props.menubarLogo} alt="logo"/>
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
padding-top: 80px;
`; 
const Header = styled.div`
position: fixed;
top: 0;
width: 100%;
z-index: 10;
background-color:${props=> props.color};
box-shadow: 0px 2px 2px ${props=> props.color};
`; 
const Navbar = styled.div`
position: relative;
width: 100%;
transition: 0.5s ease;
`; 
const Nav = styled.div`
margin: 0;
padding: 0;
display: inline-block;
float: right;
margin-right: 5%;
margin: 10 0 0 0;
`; 
const Item = styled.div`
list-style: none;
display: inline-block;
font-size: 18px;
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
const Logo = styled.div`
float: left;
display: inline-block;
margin-left: 5%;
height: auto;
transition: 0.5s ease;
`; 
