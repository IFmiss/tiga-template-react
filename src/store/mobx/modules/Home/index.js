import {
  observable,
  computed,
  action
} from 'mobx'

export default class HomeModule {
  @observable
  count = 0

  @action
  addCount () {
    this.count++
  }

  @action
  reduceCount () {
    this.count--
  }
}
