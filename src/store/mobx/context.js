import React, {
  useContext
} from 'react'
import store from './index'

export const context = React.createContext(store)

export const useStore = () => {
  const s = useContext(context)
  if (!s) {
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return s
}

