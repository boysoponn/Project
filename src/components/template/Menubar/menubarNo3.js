import React from 'react';
import './../tamplateCSS/menubar.css';

class MenubarNo3 extends React.Component {
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
    <div className={"body"+active}>
        <div className="menu-icon" onClick={this.handleClick}>
            <span className={"menu-icon__line menu-icon__line-left"+active}></span>
            <span className={"menu-icon__line"+active}></span>
            <span className={"menu-icon__line menu-icon__line-right"+active}></span>
        </div>
    
        <div className="nav">
            <div className="nav__content">
                <ul className="nav__list">
                    <li className={"nav__list-item"+active}>Home</li>
                    <li className={"nav__list-item"+active}>About</li>
                    <li className={"nav__list-item"+active}>Projects</li>
                    <li className={"nav__list-item"+active}>Contact</li>
                </ul>
            </div>
        </div>
        <div className="site-content">
            <h1 className="site-content__headline">Another menu concept</h1>
        </div>
    </div>
    );
  }
}
export default MenubarNo3;