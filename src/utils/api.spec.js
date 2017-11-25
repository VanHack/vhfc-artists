import api from './api';

describe('API utils', () => {
  const fakeArtist = __fixtures__.artist;

  beforeAll(() => {
    fetch.resetMocks();
  });

  describe('fetchArtist', () => {
    it('fetch artist successfully', async () => {
      fetch.mockResponse(JSON.stringify(fakeArtist));

      expect(await api.fetchArtist('foo')).toEqual(fakeArtist);
    });

    it('artist not found', async () => {
      const _fakeArtist = { ...fakeArtist, ...{ mbid: '' } };
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
});
