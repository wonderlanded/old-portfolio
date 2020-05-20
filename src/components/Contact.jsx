import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Heading, Subhead } from 'rebass'

const Contact = () => {
    return( 
    <section id='contact'>
        <Heading 
            fontSize={[5,6,7]}
            color='primary'>
                <FormattedMessage id="contact" />
        </Heading>
        <Subhead mt={2} fontSize={[1, 2]}>
            <FormattedMessage id="contactDesc" />
        </Subhead>
<div class="ui list">
    <div class="item">
        <i class="discord icon"></i>
        <div class="content">
        Discord: <a href='https://invite.gg/wonderbot'>@wonderlandpark#9999</a>
        </div>
    </div>
    <div class="item">
        <i class="mail icon"></i>
        <div class="content"> Mail: <a href="mailto:wonderlandpark@callisto.team">wonderlandpark@callisto.team</a>
        </div>
    </div>
    <div class="item">
        <i class="github icon"></i>
        <div class="content"> Github: <a href="https://github.com/wonderlandpark">wonderlandpark</a>
        </div>
    </div>
    <div class="item">
        <i class="twitter icon"></i>
        <div class="content"> Twitter: <a href="https://twitter.com/wonderlandpark0">@wonderlandpark0</a>
        </div>
    </div>
    <div class="item">
        <i class="code icon"></i>
        <div class="content">Sourcerer: <a href="https://sourcerer.io/wonderlandpark">wonderlandpark</a>
        </div>
    </div>
    <div class="item">
        <i class="steam icon"></i>
        <div class="content"> Steam: <a href="https://steamcommunity.com/id/wonderwonder">wonderwonder (Nickname: wonderlandpark)</a>
        </div>
    </div>
    <div class="item">
        <i class="patreon icon"></i>
        <div class="content"> Patreon: <a href="https://www.patreon.com/wonderlandpark">원더</a>
        </div>
    </div>
    </div>
    
    </section>
    )
}

export default Contact