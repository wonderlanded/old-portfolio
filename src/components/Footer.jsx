import React from 'react'
import { FormattedMessage } from 'react-intl'

const Footer = () => {
  return (
    <div className='ui center aligned vertical footer segment'>
        <div className='ui section divider' />
        <div className='ui horizontal small divided link list'>
          <a className='item' target='_blank'><FormattedMessage id="copy" /></a>
        </div>
      </div>
  )
}

export default Footer
