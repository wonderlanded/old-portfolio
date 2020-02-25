import { IntlProvider } from 'react-intl'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'semantic-ui-css/semantic.min.css'
import 'antd/dist/antd.css';

import locale from './locale'


const Lang = navigator.language.includes('ko') ? 'ko' : 'en'

ReactDOM.render(
      <IntlProvider
        locale={Lang}
        messages={locale[Lang]}
      >
        <App />
      </IntlProvider>
      ,
    document.getElementById('root')
  )
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
