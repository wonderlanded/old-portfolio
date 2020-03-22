import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Heading, Subhead } from 'rebass'

const Wonderbot = () => {
    return( 
    <section id='wonderbot'>
        <Subhead mt={2} fontSize={[1, 2]} style={{color: 'gray'}}>
            <FormattedMessage id="wonderbottag"/>
        </Subhead>
        <Heading 
            fontSize={[4,5,6]}
            color='primary'>
                <FormattedMessage id="wonderbot" />
        </Heading>
        <Subhead mt={2} fontSize={[1, 2]}>
            <FormattedMessage id="wonderbotDesc" />
        </Subhead>
        <Subhead mt={2} fontSize={[4, 5]}>
            <FormattedMessage id="money"/>
        </Subhead>
        <Subhead mt={2} fontSize={[1, 2]}>
            <FormattedMessage id="moneyDesc" />
        </Subhead>
        <img src="./images/wonderbot-money.png"/>
        <Subhead mt={2} fontSize={[4, 5]}>
            <FormattedMessage id="moderation"/>
        </Subhead>
        <Subhead mt={2} fontSize={[1, 2]}>
            <FormattedMessage id="moderationDesc" />
        </Subhead>
        <img src="./images/wonderbot-moderation.png"/>
        <Subhead mt={2} fontSize={[4, 5]}>
            <FormattedMessage id="information"/>
        </Subhead>
        <Subhead mt={2} fontSize={[1, 2]}>
            <FormattedMessage id="informationDesc" />
        </Subhead>
        <img src="./images/wonderbot-corona.png"/>
    </section>
    )
}

export default Wonderbot