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
      <Switch>
        <Route path="/home" component={Home}/>
        <Redirect from="/*" to="/home" strict exact/>
      </Switch>
    </BrowserRouter>
  )
}
{{/if}}
{{#unless useRouter}}
import Home from '@pages/Home'

const App = () => {
  return (
    <Home/>
  )
}
{{/unless}}

export default App
