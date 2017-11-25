// @flow
import createStore from 'redux-zero';

import type { ArtistType } from '../../types/index';

export interface State {
  artist: ArtistType | null,
}

export default createStore({
  artist: null,
});