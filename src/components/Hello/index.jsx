import React, {
  useEffect
} from 'react'

import classNames from 'classnames'
import './hello.less'

import {
  PROJECT_NAME
} from '@constance/index'

const Hello = () => {
  useEffect(() => {
    console.log('this is Hello components')  
  }, [])

  return (
    <div>Hello Tiga</div>
  )
}

export default Hello
