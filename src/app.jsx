import React from 'react'
{{#if useRouter}}
import {
  BrowserRouter
} from 'react-router-dom'
import RoutesProvider from '@router/index'

const App = () => {
  return (
    <BrowserRouter>
      <RoutesProvider></RoutesProvider>
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
