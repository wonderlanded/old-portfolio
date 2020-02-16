import { Menu, Icon, Drawer, Button } from 'antd';
import React from 'react'
import "./Navbar.scss";
const { SubMenu } = Menu;

export default class App extends React.Component {
state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
        <div>
      <Menu className="dark header" onClick={this.handleClick} mode="horizontal">
        <Menu.Item key="mail">
          <Icon type="home" />
          WONDERLANDPARK
        </Menu.Item>
        <Menu.Item className="right" onClick={this.showDrawer}>
        <Icon type="menu" />
        </Menu.Item>
      </Menu>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>

      </div>
    );
    
  }
}
