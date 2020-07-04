import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Heading, Subhead } from 'rebass'
import {
  Hero, CallToAction, ScrollDownIndicator
} from 'react-landing-page'
import './Landing.css'
const Landing = props => {
    return (
        <Hero>
        <Heading className='heading' fontSize={[ 7 ]}>
            <FormattedMessage id="hello" />
            </Heading>
        <Subhead className='heading' fontSize={[ 5 ]} mt={3}><FormattedMessage id="hi" /></Subhead>
        <CallToAction style={{color: 'white'}}href="#profile" mt={3}><FormattedMessage id="learnmore" /></CallToAction>
        <br/>
        <div class="center aligned author">
            <a href='mailto:wonderlandpark@callisto.team'><i class="large envelope icon"></i></a>
            <a href='https://invite.gg/wonderbot'><i class="large discord icon"></i></a>
            <a href='https://github.com/wonderlandpark'><i class="large github icon"></i></a>
        </div>
        <ScrollDownIndicator/>
    </Hero>



    )
}
export default Landing