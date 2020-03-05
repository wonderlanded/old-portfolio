import React, {useState} from 'react'

import Landing from '../components/Landing'
import Profile from '../components/Profile'
import Projects from '../components/Projects'
import Ability from '../components/Ability'
import Contact from '../components/Contact'

import Footer from '../components/Footer'

import './Main.scss'
import './Darkmode.scss'

const Page = (props) => {
    const [DrawerVisable, setVisable] = useState(false)
    const DarkMode = props.darkmode
    return (
        <div className={(DarkMode == 'true' ? 'darkmode' : 'lightmode')}>
            <Landing />
            <div className='ui container'>
                <Profile drawerVisable={props.drawerVisable} setVisable={props.setVisable}/>
                <div className='ui divider'/>
                <br/>
                <Ability />
                <div className='ui divider'/>
                <br/>
                <Projects />
                <div className='ui divider'/>
                <br/>
                <Contact />
            </div>
            <Footer />
        </div>
    )
}
export default Page