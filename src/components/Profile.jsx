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
        <Subhead mt={2}>
        <FormattedMessage id="descriptionOfMe" />
        </Subhead>
        <br/>
        <div className="ui green image label">
            <i className="icon node js"></i> Node.js
            <a className="detail"><FormattedMessage id="commonly" /></a>
        </div>
        <div className="ui yellow image label">
            <i className="icon js"></i> Javascript
            <a className="detail"><FormattedMessage id="uses" /></a>
        </div>
        <div className="ui blue image label">
            <i className="icon html5"></i>HTML5
            <a className="detail"><FormattedMessage id="uses" /></a>
        </div>
        <div className="ui pink image label">
            <i className="icon linux"></i>Linux
            <a className="detail"><FormattedMessage id="uses" /></a>
        </div>
        <div className="ui purple image label">
            <i className="icon sql"></i>SQL
            <a className="detail"><FormattedMessage id="uses" /></a>
        </div>
        <div className="ui orange image label">
            <i className="icon css3"></i>CSS
            <a className="detail"><FormattedMessage id="uses" /></a>
        </div>
        <div className="ui blue image label">
            <i className="icon python"></i>Python
            <a className="detail"><FormattedMessage id="able" /></a>
        </div>
        <div className="ui blue image label">
            C
            <a className="detail"><FormattedMessage id="able" /></a>
        </div>
        <div className="ui red image label">
            C++
            <a className="detail"><FormattedMessage id="learning" /></a>
        </div>
        <div className="ui green image label">
            Go
            <a className="detail"><FormattedMessage id="learning" /></a>
        </div>
        </section>
    )
}
export default Profile