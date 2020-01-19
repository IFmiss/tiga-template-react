import React, {
  useEffect
} from 'react'

import classNames from 'classnames'
import './hello.less'

import {
  PROJECT_NAME
} from '@constance/index'

const IHelloProps = {}

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
