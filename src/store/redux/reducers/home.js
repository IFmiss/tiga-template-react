import {
  combineReducers
} from 'redux'

import * as types from '@store/mutation-types'

export function count (state = 0, action) {
  switch (action.type) {
    case types.ADD_COUNT:
      return state + action.data
    case types.REDUCE_COUNT:
      return state - action.data
    default:
      return state
  }
}

export default combineReducers({
  count
})
