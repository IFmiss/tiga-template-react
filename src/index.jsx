import React from 'react'
import ReactDOM from 'react-dom'
import '@styles/reset.css'

import { Provider } from 'react-redux';
import store from '@store/index';

{{#if useRouter}}
import App from './app'
{{/if}}
{{#unless useRouter}}
import App from '@views/home'
{{/unless}}

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
