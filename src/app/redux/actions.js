// @flow
import type { State } from './store';

export default (store: any) => ({
  setArtist: (state: State, artist: {} | null) => ({
    ...state,
    artist: artist,
  }),
});
