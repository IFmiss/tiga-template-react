import * as types from '@store/mutation-types'

export function addCount () {
  return dispatch => {
    dispatch({
      type: types.ADD_COUNT,
      data: 1
    })
  }
}

export function reduceCount () {
  return dispatch => {
    dispatch({
      type: types.REDUCE_COUNT,
      data: 1
    })
  }
}


