import { observable, computed, reaction, toJS, asMap } from 'mobx';
import { debounce, autobind } from 'core-decorators';

class FormField {

  @observable value;  
  @observable error = asMap();
  @observable pristine = true;

  validators = [];

  constructor(options){
    Object.assign(this, options)

    reaction(() => this.value, this.validate, true)
  }

  @autobind
  validate(value) {

    if (value.trim() === ''){
      this.error.set('required', 'Field is required');
    } else {
      this.error.delete('required');
    }
  }
  
  @computed 
  get valid(){
    return !this.error.size;
  }

  errorMessage(key){
    if (typeof key === 'undefined'){
      return this.error.values()[0];
    }
    
    return this.error.get(key);
  }

}

export default FormField;