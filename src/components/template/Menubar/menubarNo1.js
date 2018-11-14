import React from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Menubar extends React.Component {
  state = {
  }

  render() {
    return (
      <Menu
      mode="horizontal"
        selectedKeys={[this.state.current]}
      >
      {this.props.menubar.map((post) => 
      post.typeGroup === true ?
        <SubMenu key={post._key} title={<span className="submenu-title-wrapper">{post.label}</span>}>
          <MenuItemGroup>
          {/* {post.group.map((pgg) => 
          <Menu.Item >
          <a href="https://ant.design"  target="_blank" rel="noopener noreferrer2">{pgg.label}</a>
          </Menu.Item>
          )} */}
          </MenuItemGroup>
        </SubMenu>
        :
        <Menu.Item key={post._key}>
          {post.link ?
          <a href={post.link} target={post.linkTarget} rel="noopener noreferrer">{post.label}</a>
          :
          <a>{post.label}</a>
          }
        </Menu.Item>
      )}
      </Menu>
    );
  }
}
export default Menubar;
