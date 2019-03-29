import React from 'react';
import { Menu } from 'antd';
import { Link} from 'react-router-dom';

class Menubar extends React.Component {
  state = {
  }

  render() {
  
  
    return (
      <div style={{backgroundColor:this.props.menubarbackgroundColor,position:'relative'}}>
      <Menu
      mode="horizontal"
        selectedKeys={[this.state.current]}   
      >
      {this.props.menubarItem.map((menubar) => 
        <Menu.Item key={menubar._key}>
          {menubar.link && menubar.link !=="#" ?
          menubar.link.search("http") === -1 && menubar.linkTarget !== '_blank'?
          <a rel="noopener noreferrer"
          style={{
            color:menubar.Color,
            animationDuration: menubar.Duration,
            fontFamily:menubar.FontFamily,
            fontSize:'calc('+menubar.FontSize+ 'vw / 15 )',
            fontWeight:menubar.FontWeight,
            fontStyle:menubar.FontStyle,
            display:menubar.Status
         }}
          >{menubar.label}</a>
          :
          <a target={menubar.linkTarget} rel="noopener noreferrer"
          style={{
            color:menubar.Color,
            animationDuration: menubar.Duration,
            fontFamily:menubar.FontFamily,
            fontSize:'calc('+menubar.FontSize+ 'vw / 15 )',
            fontWeight:menubar.FontWeight,
            fontStyle:menubar.FontStyle,
            display:menubar.Status
         }}
          >{menubar.label}</a>
          :
          <a
          style={{
            color:menubar.Color,
            animationDuration: menubar.Duration,
            fontFamily:menubar.FontFamily,
            fontSize:'calc('+menubar.FontSize+ 'vw / 15 )',
            fontWeight:menubar.FontWeight,
            fontStyle:menubar.FontStyle,
            display:menubar.Status
         }}
          >{menubar.label}</a>
          }
        </Menu.Item>
      )}
      </Menu>
      </div>
    );
  }
}
export default Menubar;
