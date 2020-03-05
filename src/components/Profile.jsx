import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Heading, Subhead } from 'rebass'

const Profile = props => {
    const show = () => {
        props.setVisable(true)
    }
    return (
        <section id='profile'>
        <Heading
        fontSize={[ 5, 6, 7 ]}
        color='primary'>
        <FormattedMessage id="itsme" />
    </Heading>
        <Subhead mt={2} fontSize={[1, 2]}>
        <FormattedMessage id="descriptionOfMe" />
        </Subhead>
        <Subhead mt={2} fontSize={[1, 2]}> <FormattedMessage id="moreabout" /></Subhead>
        <br/>
        <Subhead mt={2} fontSize={[1, 2]}><a onClick={show}><FormattedMessage id="section" /></a></Subhead>
        </section>
    )
}
export default Profile