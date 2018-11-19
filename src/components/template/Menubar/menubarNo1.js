import React from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Menubar extends React.Component {
  state = {
    h:[],
    myObj : {
      name: 'zack',
      height: 511
      
    }
  }

  render() {
//    let myItem ;
//   {Object.keys(this.state.myObj).map((key,index) => {
//      myItem = this.state.myObj.height;
// console.log(myItem);
// })}
  
  
    return (
      <Menu
      mode="horizontal"
        selectedKeys={[this.state.current]}
      >
      {this.props.menubarContent.map((post) => 
      post.typeGroup === true ?
        <SubMenu key={post._key} title={<span className="submenu-title-wrapper">{post.label}</span>}>
          <MenuItemGroup>
           {/* {post.group._key||this.state.h.map((pgg) => 
          <Menu.Item >
          <a href="https://ant.design"  target="_blank" rel="noopener noreferrer2">{pgg.label}</a>
          </Menu.Item>
          )}  */}
          {/* {Object.keys(post.group).map((key,index) => {
                    <Menu.Item >
                    <h1>lkpll</h1>
                    </Menu.Item>
          })} */}
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
