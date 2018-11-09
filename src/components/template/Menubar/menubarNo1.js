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
      {this.state.posts1.map((post) => 
      post.id === 1 ?
        <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Navigation Three - Submenu</span>}>
          <MenuItemGroup>
          {post.title.map((post1) => 
          <Menu.Item key={post.id}>
          <a href="https://ant.design"  target="_blank" rel="noopener noreferrer2">{post1.g}</a>
        </Menu.Item>
          )}
          </MenuItemGroup>
        </SubMenu>
        :
        <Menu.Item key="alipay1">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
        </Menu.Item>
      )}
      </Menu>
    );
  }
}
export default Menubar;
