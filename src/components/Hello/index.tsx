import React, {
  useEffect
} from 'react'

import classNames from 'classnames'
{{#equal useStyle 'less'}}
import './hello.less'
{{/equal}}
{{#equal useStyle 'scss'}}
import './hello.scss'
{{/equal}}

import {
  PROJECT_NAME
} from '@constance/index'

interface IHelloProps {}

const Hello: React.FC<IHelloProps> = () => {
  const classString = classNames({
    [`${PROJECT_NAME}-comp-hello`]: true
  })

  useEffect(() => {
    console.log('this is Hello components')  
  }, [])

  return (
    <div className={classString}>Hello Tiga</div>
  )
}

export default Hello
