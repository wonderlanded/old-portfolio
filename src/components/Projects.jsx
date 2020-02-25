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
        <Subhead mt={2}>
        <FormattedMessage id="projectDescription" />
        </Subhead>
<br/>
<div class="ui four stackable cards">
<a class="ui fluid card project" href="https://github.com/wonderlandpark/wonderbot">
<div class="content">
<div class="center aligned header">Wonder_Bot</div>
<div class="center aligned description">
<p><FormattedMessage id="wonderbotmoto" /></p>
<p><FormattedMessage id="wonderbotdesc" /></p>
</div>
</div>
<div class="extra content">
<div class="center aligned author"> 
<i class="github icon"></i> Github
</div>
</div>
</a>
<a class="ui fluid card" href="https://github.com/wonderlandpark/wonderlangpark">
<div class="content">
<div class="center aligned header">wonderlangpark</div>
<i class="kr flag"></i> <FormattedMessage id="onlykorean" />
<div class="center aligned description">
<p><FormattedMessage id="wonderlangpark" /></p>
</div>
</div>
<div class="extra content">
<div class="center aligned author">
<i class="github icon"></i> GitHub
</div>
</div>
</a>
<a class="ui fluid card" href="https://github.com/wonderlandpark/overwatch-stat">
<div class="content">
<div class="center aligned header">overwatch-stat</div>
<div class="center aligned description">
<p><FormattedMessage id="overwatchstat" /></p>
</div>
</div>
<div class="extra content">
<div class="center aligned author">
<i class="github icon"></i> GitHub
</div>
</div>
</a>
<a class="ui fluid card" href="https://github.com/wonderlandpark/portfolio">
<div class="content">
<div class="center aligned header">portfolio</div>
<div class="center aligned description">
<p><FormattedMessage id="portfolio" /></p>
</div>
</div>
<div class="extra content">
<div class="center aligned author">
<i class="github icon"></i> GitHub
</div>
</div>
</a>
</div>
<div class="ui center aligned basic segment">
<a class="ui secondary button" href="https://github.com/wonderlandpark?tab=repositories">
<i class="github icon"></i> <FormattedMessage id="seeallingithub" />
</a>
</div>
        </section>
    )
}
export default Projects