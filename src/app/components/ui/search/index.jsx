// @flow
import * as React from 'react';
import debounce from 'lodash/debounce';

type Props = {
  onInputChangeValue?: (value: string) => void | Promise<Function>,
  debounceInterval?: number,
};

type State = {
  value: string,
};

export default class Search extends React.Component<Props, State> {
  static defaultProps = {
    onInputChangeValue: () => {},
    debounceInterval: 300,
  };

  state = {
    value: '',
  };

  debouncedInput: Function;

  componentWillMount() {
    this.debouncedInput = debounce(
      this.props.onInputChangeValue,
      this.props.debounceInterval,
    );
  }

  onInputInput = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    this.setState({ value });
    this.debouncedInput(value);
  };

  render() {
    return (
      <div className="Search">
        <input
          type="text"
          className="input input-search"
          placeholder="Search"
          onInput={this.onInputInput}
          defaultValue={this.state.value}
        />
      </div>
    );
  }
}
