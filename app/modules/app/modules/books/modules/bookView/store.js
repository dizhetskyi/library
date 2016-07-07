import { observable } from 'mobx';

export default class BookViewStore {
  @observable book = {};
  @observable fetching = true;
  @observable error = false;
}