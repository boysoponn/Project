import React from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Menubar extends React.Component {
  state = {
    current: 'mail',
  }

//   handleClick = (e) => {
//     console.log('click ', e);
//     this.setState({
//       current: e.key,
//     });
//   }

  render() {
      const gg={
position:'fixed',
height:'200px'
      }
    return (
      <Menu
      style={gg}
      mode="horizontal"
        // onClick={this.handleClick}
        selectedKeys={[this.state.current]}
      >
        <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Navigation Three - Submenu</span>}>
          <MenuItemGroup >
          <Menu.Item key="alipay5">
          <a href="https://ant.design" style={{color:'red'}} target="_blank" rel="noopener noreferrer2">Navigation Four - Link</a>
        </Menu.Item>
        <Menu.Item key="alipay7">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer2">Navigation Four - Link</a>
        </Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay1">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
        </Menu.Item>
        <Menu.Item key="alipay2">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer1">Navigation Four - Link</a>
        </Menu.Item>
        <Menu.Item key="alipay3">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer2">Navigation Four - Link</a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default Menubar;