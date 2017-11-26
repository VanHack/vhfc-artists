// @flow
import createStore from 'redux-zero';

import type { ArtistEventType, ArtistType } from '../../types/index';

export interface State {
  artist: ArtistType | null,
  events: ArtistEventType[]
}

export default createStore({
  artist: null,
  events: [],
});