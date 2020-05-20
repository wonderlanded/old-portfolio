import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Heading, Subhead } from 'rebass'
const Projects = props => {
    return (
        <section id='projects'>
            <Heading
  fontSize={[ 5, 6, 7 ]}
  color='primary'>
  <FormattedMessage id="projects" />
</Heading>
        <Subhead fontSize={[1, 2]} mt={2}>
        <FormattedMessage id="projectDescription" />
        </Subhead>
<br/>
<div className="ui four stackable cards">
<a className="ui fluid card project" href="#wonderbot">
<div className="content">
<div className="center aligned header"><i className='icon discord'/>Wonder_Bot</div>
<div className="center aligned description">
<p><FormattedMessage id="wonderbotmoto" /></p>
<p><FormattedMessage id="wonderbotdesc" /></p>
</div>
</div>
<div className="extra content">
<div className="center aligned author"> 
<FormattedMessage id="seemore" />
</div>
</div>
</a>
<a className="ui fluid card project" href="#koreanbots">
<div className="content">
<div className="center aligned header"><i className='icon react'/>koreanbots</div>
<div className="center aligned description">
<p><FormattedMessage id="koreanbots" /></p>
</div>
</div>
<div className="extra content">
<div className="center aligned author">
<FormattedMessage id="seemore" />
</div>
</div>
</a>
<a className="ui fluid card project" href="https://github.com/wonderlandpark/phonepare">
<div className="content">
<div className="center aligned header"><i className='icon vuejs'/>phonepare</div>
<div className="center aligned description">
<p><FormattedMessage id="phonepare" /></p>
</div>
</div>
<div className="extra content">
<div className="center aligned author">
<i className="github icon"></i> GitHub
</div>
</div>
</a>
<a className="ui fluid card project" href="https://github.com/wonderlandpark/portfolio">
<div className="content">
<div className="center aligned header"><i className='icon react'/>portfolio</div>
<div className="center aligned description">
<p><FormattedMessage id="portfolio" /></p>
</div>
</div>
<div className="extra content">
<div className="center aligned author">
<i className="github icon"></i> GitHub
</div>
</div>
</a>
</div>
<div className="ui center aligned basic segment">
<a className="ui secondary button" href="https://github.com/wonderlandpark?tab=repositories">
<i className="github icon"></i> <FormattedMessage id="seeallingithub" />
</a>
</div><br/>
        </section>
    )
}
export default Projects