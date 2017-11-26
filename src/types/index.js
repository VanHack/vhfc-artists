// @flow
export type ArtistType = {
  id: number,
  name: string,
  url: string,
  image_url: string,
  thumb_url: string,
  facebook_page_url: string,
  mbid: string,
  tracker_count: number,
  upcoming_event_count: number,
};

export type ArtistEventType = {
  id: string,
  artist_id: string,
  url: string,
  on_sale_datetime: string,
  datetime: string,
  venue: {
    name: string,
    latitude: string,
    longitude: string,
    city: string,
    region: string,
    country: string,
  },
};

