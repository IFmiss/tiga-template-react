import React from 'react'
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

export default App
