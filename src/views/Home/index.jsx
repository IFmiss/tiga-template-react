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

{{#equal useStore 'redux'}}
export default connect(
  ({home}) => home,
  HomeAction
)(Home)
{{/equal}}
{{#equal useStore 'none'}}
export default Home
{{/equal}}
