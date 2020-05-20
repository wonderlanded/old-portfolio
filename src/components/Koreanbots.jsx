import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Heading, Subhead } from 'rebass'

const Koreanbots = () => {
    return( 
    <section id='koreanbots'>
        <br/>
        <Subhead mt={2} fontSize={[1, 2]} style={{color: 'gray'}}>
            REACT.JS SEMANTIC-UI
        </Subhead>
        <Heading 
            fontSize={[4,5,6]}
            color='primary'>
                KOREANBOTS
        </Heading>
        <a href="https://koreanbots.dev"><i className="icon globe"/>Website</a> {" | "}
        <a href="https://github.com/koreanbots"><i className="icon github"/> Github</a> {" | "}
        <a href="https://discord.gg/JEh53MQ"><i className="icon discord"/>Discord</a>
        <br/>
        <Subhead mt={2} fontSize={[4, 5]}>
            <FormattedMessage id="koreanbotsIntro"/>
        </Subhead>
        <Subhead mt={2} fontSize={[1, 2]}>
            <FormattedMessage id="koreanbotsDesc" />
        </Subhead>
        <img src="./images/koreanbots.png"/>
    </section>
    )
}

export default Koreanbots