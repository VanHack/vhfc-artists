// @flow
import * as React from 'react';
import { connect } from 'redux-zero/react';
import debounce from 'lodash/debounce';

import type { ArtistType } from '../../../types/index';
import actions from '../../redux/actions';
import api from '../../../utils/api';

type Props = {
  artist: ArtistType,
  fetchArtist: (artistName: string) => Promise<any>,
  setArtist: (artist: ArtistType | null) => void,
  debounceInterval?: number,
};

type State = {
  artistName: string,
};

export class Search extends React.Component<Props, State> {
  static defaultProps = {
    debounceInterval: 300,
  };

  state = {
    artistName: '',
  };

  debouncedFetch: Function;

  componentWillMount() {
    this.debouncedFetch = debounce(this.fetch, this.props.debounceInterval);
  }

  fetch = async () => {
    let artist;
    try {
      artist = await this.props.fetchArtist(this.state.artistName);
    } catch (err) {
      artist = null;
    }
    this.props.setArtist(artist);
  };

  onInputInput = (event: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ artistName: event.currentTarget.value });
    this.debouncedFetch();
  };

  render() {
    const { artist } = this.props;
    return (
      <div className="ArtistSearch">
        <input
          type="text"
          className="input input-search"
          placeholder="Search"
          onInput={this.onInputInput}
          defaultValue={this.state.artistName}
        />
        {artist && artist.name}
      </div>
    );
  }
}

export default connect(({ artist }) => ({ artist }), actions)(props => (
  <Search {...props} fetchArtist={api.fetchArtist} />
));
