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

global.__fixtures__ = {
  artist,
};
