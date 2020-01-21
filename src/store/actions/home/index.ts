import * as types from '@store/mutation-types'

export function addCount () {
  return (dispatch: Function) => {
    dispatch({
      type: types.ADD_COUNT,
      data: 1
    })
  }
}

export function reduceCount () {
  return (dispatch: Function) => {
    dispatch({
      type: types.REDUCE_COUNT,
      data: 1
    })
  }
}


