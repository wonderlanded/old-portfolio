import { Menu, Icon, Drawer } from 'antd';
import React, { useEffect, useState } from 'react'
import "./Navbar.scss";


const Navbar = props => {
  const DrawerVisable = props.drawerVisable
  const setVisable = props.setVisable 
  const Dark = props.darkmode
  const setDark = props.setDark
  const DarkMode = () => {
    if(localStorage.dark == 'true') localStorage.dark = false
    else localStorage.dark = true
    setDark(localStorage.dark)
  }


  const showDrawer = () => {
    setVisable(true)
  };

  const onClose = () => {
    setVisable(false)
  };
  useEffect(() => {
    if(localStorage.dark === undefined) localStorage.dark = true
    setDark(localStorage.dark)

  }, [])
    
  
    return (
        <div>
      <Menu className="dark header" mode="horizontal">
        <Menu.Item key="mail">
          <Icon type="home" />
          {'wonderlandpark'.toUpperCase()}
        </Menu.Item>
        <Menu.Item className="right" onClick={showDrawer}>
        <Icon type="menu" />
        </Menu.Item>
      </Menu>
        <Drawer
          title={'wonderlandpark'.toUpperCase()}
          placement="right"
          closable={true}
          onClose={onClose}
          visible={DrawerVisable}
        >
          <a href='#profile'>Profile</a> <br/>
          <a onClick={DarkMode}>{(Dark == 'true' ? (<><i className='icon sun'/> Toggle Light Mode</>) : (<><i className='icon moon'/> Toggle Dark Mode </>))}</a>
        </Drawer>

      </div>
    );
}

export default Navbar
