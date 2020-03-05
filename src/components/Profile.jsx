import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Heading, Subhead } from 'rebass'

const Profile = props => {
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
        <h2 className='desc'>프론트 개발을 즐겨하지만, 백앤드뿐만 아니라 디스코드 챗봇, </h2>
        </section>
    )
}
export default Profile