import { Menu, Icon, Drawer } from 'antd';
import { FormattedMessage } from 'react-intl'
import React, { useEffect, useState } from 'react'
import "./Navbar.css";


const Navbar = props => {
  const DrawerVisable = props.drawerVisable
  const setVisable = props.setVisable 
  const Dark = props.darkmode
  const setDark = props.setDark
  const DarkMode = () => {
    if(localStorage.dark === 'true') localStorage.dark = false
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
      <Menu className="dark header navbar" mode="horizontal">
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
         
          <a onClick={DarkMode}>{(Dark === 'true' ? (<><i className='icon sun'/> <FormattedMessage id="lightmode" /></>) : (<><i className='icon moon'/><FormattedMessage id="darkmode" /></>))}</a>
          <div className='ui divider'/>
           <div>MENU</div>
          <div className="ui bulleted list">
          <a className="item" href='#profile' onClick={onClose}><FormattedMessage id="itsme" /></a>
          <a className="item" href='#introduce' onClick={onClose}><FormattedMessage id="introduce" /></a>
          <a className="item" href='#ability' onClick={onClose}><FormattedMessage id="ability" /></a>
          <a className="item" href='#projects' onClick={onClose}><FormattedMessage id="projects" /></a>
          <a className="item" href='#about' onClick={onClose}><FormattedMessage id="about" /></a>
          </div>
          </Drawer>
          </div>

    );
}

export default Navbar
