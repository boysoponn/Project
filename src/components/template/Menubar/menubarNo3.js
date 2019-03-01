import React from 'react';
import './../tamplateCSS/menubar.css';
import { Link} from 'react-router-dom';

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
                {this.props.menubarItem.map((menubar) =>
                    menubar.link.search("http") === -1?
                    <li key={menubar._key} style={{fontSize:'calc('+menubar.FontSize+ 'vw / 10 )',}} className={"nav__list-item"+active}><Link to={menubar.link} target={menubar.linkTarget}
                    style={{
                        color:menubar.Color,
                        fontFamily:menubar.FontFamily,
                        fontWeight:menubar.FontWeight,
                        fontStyle:menubar.FontStyle,
                     }}>
                    {menubar.label}</Link></li>
                    : 
                    <li key={menubar._key} style={{fontSize:'calc('+menubar.FontSize+ 'vw / 10 )'}} className={"nav__list-item"+active}><a href={menubar.link} target={menubar.linkTarget}
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
    );
  }
}
export default MenubarNo3;