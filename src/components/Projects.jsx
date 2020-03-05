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
<a className="ui fluid card project" href="https://github.com/wonderlandpark/wonderbot">
<div className="content">
<div className="center aligned header">Wonder_Bot</div>
<div className="center aligned description">
<p><FormattedMessage id="wonderbotmoto" /></p>
<p><FormattedMessage id="wonderbotdesc" /></p>
</div>
</div>
<div className="extra content">
<div className="center aligned author"> 
<i className="github icon"></i> Github
</div>
</div>
</a>
<a className="ui fluid card project" href="https://github.com/wonderlandpark/wonderlangpark">
<div className="content">
<div className="center aligned header">wonderlangpark</div>
<div className="center aligned description">
<p><i class="kr flag"></i> <FormattedMessage id="onlykorean" /></p>
<p><FormattedMessage id="wonderlangpark" /></p>
</div>
</div>
<div className="extra content">
<div className="center aligned author">
<i className="github icon"></i> GitHub
</div>
</div>
</a>
<a className="ui fluid card project" href="https://github.com/wonderlandpark/overwatch-stat">
<div className="content">
<div className="center aligned header">overwatch-stat</div>
<div className="center aligned description">
<p><FormattedMessage id="overwatchstat" /></p>
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
<div className="center aligned header">portfolio</div>
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
</div>
        </section>
    )
}
export default Projects