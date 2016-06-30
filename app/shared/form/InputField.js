import React, { Component, PropTypes } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import classnames from 'classnames';

@observer class InputField extends Component {

  render() {
    const { input } = this.props;

    return (
      <div className={classnames("form-group", {'has-error': !input.pristine && !input.valid})}>
        <label>{input.label || input.name}</label>
        <input
          className="form-control"
          onChange={this.onChange}
          onFocus={() => input.pristine = false}
          name={input.name}
          value={input.value}
          type={this.props.type}
        />
        {!input.pristine && !input.valid && <div>{input.errorMessage()}</div>}
      </div>
    );
  }

  @autobind
  onChange(e) {
    const { input } = this.props;
    input.value = e.target.value;
  }

  static defaultProps = {
    type: 'text'
  }

}

export default InputField;