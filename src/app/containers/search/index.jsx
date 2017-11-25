// @flow
import * as React from 'react';
import { connect } from 'redux-zero/react';
import debounce from 'lodash/debounce';

import actions from '../../redux/actions';

type Props = {
  fetchArtist: (artistName: string) => void,
  debounceInterval?: number,
};

export class Search extends React.Component<Props> {
  static defaultProps = {
    debounceInterval: 300,
  };

  debouncedFetchArtist: Function = debounce(
    this.props.fetchArtist,
    this.props.debounceInterval,
  );

  onInputInput = (event: SyntheticInputEvent<HTMLInputElement>) => {
    this.debouncedFetchArtist(event.currentTarget.value);
  };

  render() {
    return (
      <div className="ArtistSearch">
        <input
          type="text"
          className="input input-search"
          placeholder="Search"
          onInput={this.onInputInput}
        />
      </div>
    );
  }
}

export default connect(null, actions)(Search);
