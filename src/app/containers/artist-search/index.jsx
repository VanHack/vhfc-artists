// @flow
import * as React from 'react';
import { connect } from 'redux-zero/react';

import type { ArtistType } from '../../../types/index';
import actions from '../../redux/actions';
import api from '../../../utils/api';
import Search from '../../components/ui/search/index';
import ArtistDetails from '../../components/artists/details/index';

type Props = {
  artist: ArtistType,
  fetchArtist: (artistName: string) => Promise<any>,
  setArtist: (artist: ArtistType | null) => void,
};

type State = {
  artist: ArtistType | null,
};

export class ArtistSearch extends React.Component<Props, State> {
  onSearchValueChange = async (artistName: string): Promise<any> => {
    let artist;
    try {
      artist = await this.props.fetchArtist(artistName);
    } catch (err) {
      artist = null;
    }
    this.props.setArtist(artist);
  };

  render() {
    const { artist } = this.props;
    return (
      <div className="ArtistSearch">
        <Search
          onInputChangeValue={this.onSearchValueChange}
          debounceInterval={300}
        />
        <ArtistDetails artist={artist} />
      </div>
    );
  }
}

export default connect(({ artist }) => ({ artist }), actions)(props => (
  <ArtistSearch {...props} fetchArtist={api.fetchArtist} />
));
