import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Heading, Subhead } from 'rebass'

const Contact = () => {
    return( 
    <section className='contact'>
        <Heading 
            fontSize={[5,6,7]}
            color='primary'>
                <FormattedMessage id="contact" />
        </Heading>
        <Subhead mt={2} fontSize={[1, 2]}>
            <FormattedMessage id="contactDesc" />
        </Subhead>

    </section>
    )
}

export default Contact