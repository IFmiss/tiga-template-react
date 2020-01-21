import * as types from '@store/mutation-types'

export function addCount (): Function {
  return (dispatch: Function) => {
    dispatch({
      type: types.ADD_COUNT,
      data: 1
    })
  }
}

export function reduceCount (): Function {
  return (dispatch: Function) => {
    dispatch({
      type: types.REDUCE_COUNT,
      data: 1
    })
  }
}


