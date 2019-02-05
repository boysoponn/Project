import React from 'react';
import styled from 'styled-components'

class Social extends React.Component {
  render() {
    return (
            <Btn onClick={this.props.onClick} className={this.props.social}/>   
    );
  }
}

export default  Social; 
const Btn = styled.a`
@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');
display: inline-block;
position: relative;
cursor: pointer;
width: 50px;
height: 50px;
margin:5px;
box-shadow: 0 2px 2px #999;
padding: 0px;
text-decoration: none;
text-align: center;
color: #fff;
font-size: 25px;
font-weight: normal;
line-height: 2em;
border-radius: 25px;
-moz-border-radius:25px;
-webkit-border-radius:25px;
.facebook&{
  background: #4060A5;
  :before{ 
    font-family: "FontAwesome";
    content: "\f09a"; 
  }
  :hover{
    color: #4060A5;
    background: #fff;
  }
}
.google&{
  background: #e64522;
  :before{
    font-family: "FontAwesome";
    content: "\f0d5"; /* add googleplus icon */
  }
  :hover{
    color: #e64522;
    background: #fff;
  }
}
.twitter&{
  background: #00ABE3;
  :before{
    font-family: "FontAwesome";
    content: "\f099"; 
  }
  :hover{
    color: #00ABE3;
    background: #fff;
  }
}
.linkedin&{
  background: #0094BC;
  :before{
    font-family: "FontAwesome";
    content: "\f0e1"; 
  }
  :hover{
    color: #0094BC;
    background: #fff;
  }
}
.pinterest&{
  background: #cb2027;
  before{
    font-family: "FontAwesome";
    content: "\f0d2";
  }
  :hover{
      color: #cb2027;
      background: #fff;
  }
}
`;
