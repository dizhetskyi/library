import { observable, computed } from 'mobx';
import FormField from 'stores/FormField';

class Form {

  fields = {};

  constructor(fields){
    fields.forEach(field => this.fields[field.name] = new FormField(field))
  }
  
  @computed get valid() {

    for (let field in this.fields){
      if (!this.fields[field].valid) return false;
    }
    
    return true;
  }

  @computed get pristine(){
    for (let field in this.fields){
      if (!this.fields[field].pristine) return false;
    }
    
    return true; 
  }

  serialize() {
    var form = {};

    for (let field in this.fields){
      form[field] = this.fields[field].value;
    }

    return form;
  }
}

export default Form;
