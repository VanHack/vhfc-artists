import actions from './actions';

describe('Actions', () => {
  const fakeArtist = __fixtures__.artist;

  describe('fetchArtist', () => {
    it('update artist', () => {
      const state = {
        artist: null,
      };

      expect(actions().setArtist(state, fakeArtist)).toEqual({
        artist: fakeArtist,
      });
    });
  });
});
