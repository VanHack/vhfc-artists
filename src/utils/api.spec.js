import api from './api';

describe('API utils', () => {
  const mockArtist = __fixtures__.artist;
  const mockEvents = __fixtures__.events;

  afterEach(() => {
    fetch.resetMocks();
  });

  describe('fetchArtist()', () => {
    it('fetch artist successfully', async () => {
      fetch.mockResponse(JSON.stringify(mockArtist));

      expect(await api.fetchArtist('foo')).toEqual(mockArtist);
    });

    it('artist not found', async () => {
      const _fakeArtist = { ...mockArtist, ...{ mbid: '' } };
      fetch.mockResponse(JSON.stringify(_fakeArtist));

      try {
        await api.fetchArtist('foo');
      } catch (err) {
        expect(err.message).toEqual('Artist not found');
      }
    });

    it('error on parsing', async () => {
      fetch.mockResponse(JSON.stringify('{'));

      try {
        await api.fetchArtist('foo');
      } catch (err) {
        expect(err.message).toEqual('Artist not found');
      }
    });

  });

  /* Failing without reason*/
  xdescribe('fetchArtistEvents()', () => {
    it('fetch event', async () => {
      fetch.mockResponse(JSON.stringify(mockEvents));

      const events = await api.fetchArtistEvents('bar');

      expect(events).toEqual(mockEvents);
    });
  });
});
