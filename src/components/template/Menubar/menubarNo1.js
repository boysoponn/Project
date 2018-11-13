import React from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Menubar extends React.Component {
  state = {
    current: 'mail',
    posts1 : [
      {id: 2, title: 'fff', content: 'Welcome to learning React!'},
      {id: 1, title:[{ g:'ddd'},{g:'sds'}], content: 'You can install React from npm.'}
    ]
  }

//   handleClick = (e) => {
//     console.log('click ', e);
//     this.setState({
//       current: e.key,
//     });
//   }

  render() {
    return (
      <Menu
      mode="horizontal"
        // onClick={this.handleClick}
        selectedKeys={[this.state.current]}
      >
      {this.props.menubar.map((post) => 
      post.typeGroup === true ?
        <SubMenu key={post._key} title={<span className="submenu-title-wrapper">{post.label}</span>}>
          <MenuItemGroup>
          {/* {post.group.map((post) => 
          <Menu.Item key={post._key}>
          <a href="https://ant.design"  target="_blank" rel="noopener noreferrer2">{post.content}</a>
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
