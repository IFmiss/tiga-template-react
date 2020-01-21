import {
  combineReducers
} from 'redux'

import HomeReducer from './home'

const ReducerInfo = combineReducers({
  home: HomeReducer
})

export default ReducerInfo
