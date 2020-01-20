import {
  bindActionCreators
} from 'redux'
import * as HomeAction from './home'

export default dispatch => bindActionCreators({
  ...HomeAction
}, dispatch)
