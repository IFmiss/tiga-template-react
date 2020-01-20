import React, {
  useEffect
} from 'react'

{{#equal useStore 'redux'}}
import {
  connect
} from 'react-redux'

import HomeAction from '@store/actions'
{{/equal}}

import Hello from '@components/Hello'

interface IHomeProps {}

const Home: React.FC<IHomeProps> = (props) => {
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
