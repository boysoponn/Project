import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Link} from 'react-router-dom';
class AppWithConnect extends React.Component {
    constructor(props){
        super(props);
        this.state={
          user:false
        }
    }
render() {
    return (
            <Text>
                <H1>Projectcms</H1>
                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</P>
                <Link to="/cms" className='fillRight'>Getting Started</Link>
            </Text>
    )}}

    const mapStateToProps = state => ({
      user: state.user ,
    })

export default connect(mapStateToProps)(AppWithConnect);

const Text = styled.div`
text-align: center;
color: #000;
padding:0 5vw;
`;

const H1 = styled.h1`
font-size: 7vw;
color: #000;
`;

const P = styled.p`
text-align: center;
color: #000;
font-size: 1vw;
`;

const Button = styled.button`
  position: relative;
  height: 60px;
  width: 200px;
  margin: 30px 7px;
  padding: 5px 5px;
//   font-style:${props=> props.FontStyle}
//   font-family:${props => props.FontFamily};
//   font-weight: ${props => props.FontWeight};
//   font-size: ${props => props.FontSize};
  letter-spacing: 2px;
  color: black;
  border: 2px  solid;
  border-radius: 20px;
  text-transform: uppercase;
  outline: 0;
  overflow:hidden;
  background: white;
  z-index: 1;
  cursor: pointer;
  transition:         0.09s ease-in;
  -o-transition:      0.09s ease-in;
  -ms-transition:     0.09s ease-in;
  -moz-transition:    0.09s ease-in;
  -webkit-transition: 0.09s ease-in;
  :hover{
    border: 2px ${props => props.buttonHBDColor} solid; 
    color:${props => props.buttonHoverColor}
  }
  .fillRight&{
    :hover {
      color: white;
    }
    :before {
      content: "";
      position: absolute;
      background: black;
      bottom: 0;
      left:0 ;
      right: 100%;
      top: 0;
      z-index: -1;
      -webkit-transition: all 0.09s ease-in;

    }
    :hover:before {
      right: 0;
    }
  }
`;