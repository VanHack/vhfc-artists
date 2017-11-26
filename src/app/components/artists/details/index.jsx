// @flow
import * as React from 'react';

import './index.css';
import type { ArtistType } from '../../../../types/index';

type Props = {
  artist: ArtistType | null,
};

export default function ArtistDetails({ artist }: Props) {
  if (!artist) return null;
  return (
    <div className="ArtistDetails">
      <picture className="ArtistDetails_picture">
        <img
          className="ArtistDetails_picture_instance"
          src={artist.thumb_url}
          alt={artist.name}
        />
        {artist.facebook_page_url && (
          <a
            className="ArtistDetails_facebook"
            target="_blank"
            href={artist.facebook_page_url}
          >
            <i className="fa fa-facebook" />
            acebook
          </a>
        )}
      </picture>
      <h1 className="ArtistDetails_name">{artist.name}</h1>
    </div>
  );
}
