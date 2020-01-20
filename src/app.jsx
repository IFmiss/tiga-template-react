import React from 'react'
{{#if useRouter}}
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
{{/if}}

import {
  Home
} from '@router/index'

{{#if useRouter}}
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home}/>
        <Redirect from="/*" to="/home" strict exact/>
      </Switch>
    </BrowserRouter>
  )
}
{{/if}}
{{#unless useRouter}}
const App = () => {
  return (
    <Home/>
  )
}
{{/unless}}

export default App
