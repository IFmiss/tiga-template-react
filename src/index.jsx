import React from 'react'
import ReactDOM from 'react-dom'
import '@styles/reset.css'

import { Provider } from 'react-redux';
import store from 'src/controller/store/index';

{{#if useRouter}}
import App from './app'
{{/if}}
{{#unless useRouter}}
import App from '@components/Hello'
{{/unless}}

ReactDOM.render(
  <Provider>
    <App/>
  </Provider>,
  document.getElementById('root')
)
