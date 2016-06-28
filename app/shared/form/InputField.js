import React, { Component, PropTypes } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer class InputField extends Component {

  onChange = (e) => {
    this.props.onChange(e.target.name, e.target.value)
  }

  render() {
    const input = this.props;

    return (
      <div className="form-group">
        <label>label</label>
        <input
          onChange={this.onChange}
          name={input.name}
          value={input.value}
          type={input.type}
        />
      </div>
    );
  }

  static propTypes = {
    onChange: PropTypes.func.isRequired
  }

  static defaultProps = {
    type: 'text'
  }

}

export default InputField;