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

{{#unEqual useStore 'mobx'}}
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
{{/unEqual}}
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
{{#equal useStore 'redux'}}
export default Home
{{/equal}}
