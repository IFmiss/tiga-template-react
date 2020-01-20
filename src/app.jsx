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
      <Route path="/home" component={Home}/>
    </BrowserRouter>
  )
}

export default App
