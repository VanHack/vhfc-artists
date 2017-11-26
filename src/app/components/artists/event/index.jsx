// @flow
import * as React from 'react';
import moment from 'moment';

import './index.css';
import type { ArtistEventType } from '../../../../types/index';

type Props = {
  event: ArtistEventType,
};

function eventDate(datetime: string): string {
  const date = moment(datetime);
  return date.format('llll');
}

export default function ArtistEvent(props: Props) {
  const { datetime } = props.event;
  const { country, city, name } = props.event.venue;
  return (
    <div className="ArtistEvent">
      <div className="ArtistEvent_row ArtistEvent_date">
        <i className="fa fa-calendar" />
        <span>{eventDate(datetime)}</span>
      </div>
      <div className="ArtistEvent_row ArtistEvent_city">
        <i className="fa fa-globe" />
        {`${country}, ${city}`}
      </div>
      <div className="ArtistEvent_row ArtistEvent_venue">
        <i className="fa fa-map-marker" />
        {name}
      </div>
    </div>
  );
}
