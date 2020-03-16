import {
  combineReducers
} from 'redux'

import * as types from '@store/mutation-types'

import {
  IActionProps
} from '@store/types'

export function count (state: number = 0, action: IActionProps<number>): number {
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
