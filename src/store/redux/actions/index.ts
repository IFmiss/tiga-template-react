import {
  bindActionCreators,
  Dispatch
} from 'redux'
import * as HomeAction from './home'

export default (dispatch: Dispatch) => bindActionCreators({
  ...HomeAction
}, dispatch)
