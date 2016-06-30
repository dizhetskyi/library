import { observable, computed, reaction } from 'mobx';
import { debounce, autobind } from 'core-decorators';

class FormField {

  @observable value;  
  @observable error = {};
  @observable pristine = true;

  constructor({name, value, label}){
    this.name = name;
    this.value = value;
    this.label = label;

    reaction(() => this.value, this.validate, true)
  }

  @autobind
  @debounce
  validate(value) {
    var err = {};

    if (value.trim() === ''){
      err['required'] = 'Field is required';
    }

    this.error = err;
  }
  
  @computed get valid(){
    return !Object.keys(this.error).length;
  }

  errorMessage(key){
    const errors = Object.keys(this.error);

    if (!errors.length){
      return null;
    } else {
      if (typeof key === 'undefined'){
        return this.error[errors[0]]
      } else {
        return this.error[key] || null;
      }
    }
  }

}

export default FormField;