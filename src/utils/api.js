// @flow
import env from './env';

import type { ArtistEventType, ArtistType } from '../types/index';

const API_URL = env('API_URL');
const API_KEY = env('API_KEY');

function apiUrl(resource: string): string {
  return `${(API_URL: string)}${resource}?app_id=${API_KEY}`;
}

export default {
  fetchArtist: (artistName: string): Promise<ArtistType> => {
    return fetch(apiUrl(`/artists/${artistName}`))
      .then(response => {
        try {
          return response.json();
        } catch (err) {
          throw new Error(`Artist not found`);
        }
      })
      .then(artist => {
        if (!artist.mbid) throw new Error(`Artist not found`);
        return artist;
      });
  },
  fetchArtistEvents: (artistName: string): Promise<ArtistEventType[]> => {
    return fetch(apiUrl(`/artists/${artistName}/events`))
      .then(response => {
        try {
          return response.json();
        } catch (err) {
          return []
        }
      });
  }
};
