import actions from './actions';

describe('Actions', () => {
  const mockedArtist = __fixtures__.artist;
  const mockedEvents = [__fixtures__.event];

  it('set new artist', () => {
    const state = {
      artist: null,
    };

    expect(actions().setArtist(state, mockedArtist)).toEqual({
      artist: mockedArtist,
    });
  });

  it('set events', () => {
    const state = {events: []};

    expect(actions().setEvents(state, mockedEvents)).toEqual({
      events: mockedEvents
    })
  });
});
