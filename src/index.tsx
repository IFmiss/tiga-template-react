import React from 'react'
import ReactDOM from 'react-dom'
import '@styles/reset.css'

{{#equal useStore 'redux'}}
import { Provider } from 'react-redux';
import store from '@store/index';
{{/equal}}
{{#equal useStore 'mobx'}}
import store from '@store/index'
import {
  context
} from '@store/context'
{{/equal}}
{{#if useRouter}}
import App from './app'
{{/if}}
{{#unless useRouter}}
import App from '@views/home'
{{/unless}}

{{#equal useStore 'redux'}}
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
{{/equal}}
{{#equal useStore 'none'}}
ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
{{/equal}}