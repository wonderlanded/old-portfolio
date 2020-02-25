import React from 'react'

import Landing from '../components/Landing'
import Profile from '../components/Profile'
import Projects from '../components/Projects'

import Footer from '../components/Footer'

import './Main.scss'

const Page = props => {
    
    return (
        <div>
            <Landing />
            <div className='ui container'>
                <Profile />
                <div className='ui divider'/>
                <br/>
                <Projects />
            </div>
            <Footer />
        </div>
    )
}
export default Page