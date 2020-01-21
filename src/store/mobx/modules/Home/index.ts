import {
  observable,
  computed,
  action
} from 'mobx'

export default class HomeModule {
  @observable
  count: number = 0

  @action
  addCount () {
    console.log(this)
    this.count++
  }

  @action
  reduceCount () {
    this.count--
  }
}
