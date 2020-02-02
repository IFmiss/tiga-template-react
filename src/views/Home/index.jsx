import React, {
  useEffect
} from 'react'

{{#equal useStore 'redux'}}
import {
  connect
} from 'react-redux'
import HomeAction from '@store/actions'
{{/equal}}
{{#equal useStore 'mobx'}}
import {
  observer
} from 'mobx-react'
import {
  useStore
} from '@store/context'
{{/equal}}
import Hello from '@components/Hello'
{{#equal useStyle 'less'}}
import './home.less'
{{/equal}}
{{#equal useStyle 'scss'}}
import './home.scss'
{{/equal}}

{{#equal useStore 'none'}}
const Home = (props) => {
  return (
    <>
      <div>this is home</div>
      <Hello/>
    </>
  )
}
{{/equal}}
{{#equal useStore 'redux'}}
const Home = (props) => {
  return (
    <>
      <div>this is home</div>
      <Hello/>
      <span>{props.count}</span>
      <div onClick={props.addCount}> + 1</div>
      <div onClick={props.reduceCount}> - 1</div>
    </>
  )
}
{{/equal}}
{{#equal useStore 'mobx'}}
const Home = observer((props) => {
  const { homeStore } = useStore()
  return (
    <>
      <div>this is home</div>
      <Hello/>
      <span>{ homeStore.count }</span>
      <div onClick={() => homeStore.addCount()}> + 1</div>
      <div onClick={() => homeStore.reduceCount()}> - 1</div>
    </>
  )
})
{{/equal}}

{{#equal useStore 'redux'}}
export default connect(
  ({home}) => home,
  HomeAction
)(Home)
{{/equal}}
{{#unEqual useStore 'redux'}}
export default Home
{{/unEqual}}
