// @flow
import * as React from 'react';
import { connect } from 'redux-zero/react';

import type { ArtistEventType, ArtistType } from '../../../types/index';
import actions from '../../redux/actions';
import api from '../../../utils/api';
import Search from '../../components/ui/search/index';
import ArtistDetails from '../../components/artists/details/index';
import ArtistEvent from '../../components/artists/event/index';

type Props = {
  artist: ArtistType,
  events: ArtistEventType[],
  fetchArtist: (artistName: string) => Promise<any>,
  fetchArtistEvents: (artistName: string) => Promise<any>,
  setArtist: (artist: ArtistType | null) => void,
  setEvents: (artist: ArtistEventType[]) => void,
};

type State = {
  artist: ArtistType | null,
};

export class ArtistSearch extends React.Component<Props, State> {
  static defaultProps = {
    events: [],
  };

  onSearchValueChange = async (artistName: string): Promise<any> => {
    let artist;
    let events;
    try {
      artist = await this.props.fetchArtist(artistName);
      events = await this.props.fetchArtistEvents(artistName);
    } catch (err) {
      artist = null;
      events = [];
    }

    this.props.setArtist(artist);
    this.props.setEvents(events);
  };

  render() {
    const { artist, events } = this.props;
    return (
      <div className="ArtistSearch">
        <Search
          onInputChangeValue={this.onSearchValueChange}
          debounceInterval={300}
        />
        <ArtistDetails artist={artist} />
        <div className="hr" />
        {events.length > 0 &&
          events.map(event => <ArtistEvent key={event.id} event={event} />)}
      </div>
    );
  }
}

export default connect(
  ({ artist, events }) => ({ artist, events }),
  actions,
)(props => <ArtistSearch {...props} {...api} />);
