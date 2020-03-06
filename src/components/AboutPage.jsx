import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Heading, Subhead } from 'rebass'

const AboutPage = () => {
    return (
        <section id='about'>
        <Heading
            fontSize={[5,6,7]}
            color='primary'>
                <FormattedMessage id="about" />
        </Heading>
        <Subhead mt={2} fontSize={[1, 2]}>
            <FormattedMessage id="aboutDesc" />
        </Subhead>
        <br/>
        <a href='https://github.com/wonderlandpark/portfolio'><i className='icon github'/>Github</a>
        </section>
    )
}

export default AboutPage