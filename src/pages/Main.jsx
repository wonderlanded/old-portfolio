import React, {useState} from 'react'

import Navbar from '../components/Navbar';
import Landing from '../components/Landing'
import Profile from '../components/Profile'
import Projects from '../components/Projects'
import Ability from '../components/Ability'
import Contact from '../components/Contact'
import Introducing from '../components/Introducing'
import AboutPage from '../components/AboutPage'
import Wonderbot from '../components/Wonderbot'
import Koreanbots from '../components/Koreanbots';


import Footer from '../components/Footer'

import './Main.css'
import './Darkmode.css'


const Page = (props) => {
    const [DrawerVisable, setVisable] = useState(false)
    const DarkMode = props.darkmode
    return (
        <div className={(DarkMode == 'true' ? 'darkmode' : 'lightmode')}>
            <Navbar darkmode={props.darkmode} setDark={props.setDark} drawerVisable={props.drawerVisable} setVisable={props.setVisable} />
            <Landing />
            <div className='ui container'>
                <Profile drawerVisable={props.drawerVisable} setVisable={props.setVisable}/>
                <div className='ui divider'/>
                <Introducing/>
                <div className='ui divider'/>
                <Ability />
                <div className='ui divider'/>
                <Projects />
                <Wonderbot/>
                <div className='ui divider'/>
                <Koreanbots/>
                <div className='ui divider'/>
                <Contact />
                <div className='ui divider'/>
                <AboutPage />
            </div>
            <Footer />
        </div>
    )
}
export default Page