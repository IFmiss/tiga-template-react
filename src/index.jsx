import React from 'react'
import ReactDOM from 'react-dom'
import '@styles/reset.css'

{{#equal useStore 'redux'}}
import { Provider } from 'react-redux';
import store from '@store/index';
{{/equal}}
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
