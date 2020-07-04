import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Heading, Subhead } from 'rebass'

const Phonepare = () => {
    return( 
    <section id='phonepare'>
        <br/>
        <Subhead mt={2} fontSize={[1, 2]} style={{color: 'gray'}}>
            VUE.JS
        </Subhead>
        <Heading 
            fontSize={[4,5,6]}
            color='primary'>
                PhonePare
        </Heading>
        <a href="https://phonepare.cf"><i className="icon globe"/>Website</a> {" | "}
        <a href="https://github.com/wonderlandpark/phonepare"><i className="icon github"/> Github</a> {" | "}
        <br/>
        <Subhead mt={2} fontSize={[4, 5]}>
            <FormattedMessage id="phonepareIntro"/>
        </Subhead>
        <Subhead mt={2} fontSize={[1, 2]}>
            <FormattedMessage id="phonepareDesc" />
        </Subhead>
        <img src="./images/phonepare.png"/>
    </section>
    )
}

export default Phonepare