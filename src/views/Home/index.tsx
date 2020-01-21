import React, {
  useEffect
} from 'react'

{{#equal useStore 'redux'}}
import {
  connect
} from 'react-redux'
import HomeAction from '@store/actions'
import { useStore } from '@store/mobx/context'
{{/equal}}
{{#equal useStore 'mobx'}}
import {
  observer
} from 'mobx-react'
{{/equal}}

import Hello from '@components/Hello'

interface IHomeProps {}

{{#unEqual useStore 'mobx'}}
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
{{/unEqual}}
{{#equal useStore 'mobx'}}
const Home: React.FC<IHomeProps> = observer((props) => {
  const { homeStore: { count, addCount, reduceCount } } = useStore()
  return (
    <>
      <div>this is home</div>
      <Hello/>
      <span>{count}</span>
      <div onClick={addCount}> + 1</div>
      <div onClick={reduceCount}> - 1</div>
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
