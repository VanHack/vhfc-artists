// @flow
import type { State } from './store';
import type { ArtistEventType, ArtistType } from '../../types/index';

export default (store: any) => ({
  setArtist: (state: State, artist: ArtistType | null) => ({
    ...state,
    artist: artist,
  }),
  setEvents: (state: State, events: ArtistEventType[] | []) => ({
    ...state,
    events: events,
  }),
});
