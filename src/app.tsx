import React from 'react'

{{#if useRouter}}
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import {
  Home
} from '@router/index'

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/home" component={Home}/>
    </BrowserRouter>
  )
}
{{/if}}

{{#unless useRouter}}
import Hello from '@components/Hello'
const App = () => {
  return (
    <Hello/>
  )
}
{{/unless}}

export default App
