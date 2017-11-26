import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchMock from 'jest-fetch-mock';

Enzyme.configure({ adapter: new Adapter() });

global.shallow = Enzyme.shallow;
global.mount = Enzyme.mount;
global.render = Enzyme.render;
global.fetch = fetchMock;

const artist = {
  id: 510,
  name: 'Maroon 5',
  url: 'http://www.bandsintown.com/Maroon5?came_from=67',
  image_url: 'https://s3.amazonaws.com/bit-photos/large/7481529.jpeg',
  thumb_url: 'https://s3.amazonaws.com/bit-photos/thumb/7481529.jpeg',
  facebook_page_url: 'https://www.facebook.com/maroon5',
  mbid: '0ab49580-c84f-44d4-875f-d83760ea2cfe',
  tracker_count: 0,
  upcoming_event_count: 0,
};

const event = {
  id: '13722599',
  artist_id: '438314',
  url:
    'http://www.bandsintown.com/event/13722599?app_id=foo&artist=Skrillex&came_from=67',
  on_sale_datetime: '2017-03-01T18:00:00',
  datetime: '2017-03-19T11:00:00',
  venue: {
    name: 'Encore Beach Club',
    latitude: '36.12714',
    longitude: '-115.1629562',
    city: 'Las Vegas',
    region: 'NV',
    country: 'United States',
  },
  offers: [
    {
      type: 'Tickets',
      url:
        'http://www.bandsintown.com/event/13722599/buy_tickets?app_id=foo&artist=Skrillex&came_from=67',
      status: 'available',
    },
  ],
  lineup: ['string'],
};

global.__fixtures__ = {
  artist,
  event,
};
