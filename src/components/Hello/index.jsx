import React, {
  useEffect
} from 'react'

const Hello = () => {
  useEffect(() => {
    console.log('this is Hello components')  
  }, [])

  return (
    <div>Hello Tiga</div>
  )
}

export default Hello
