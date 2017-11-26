import React from 'react';

import { ArtistSearch } from './index';
import ArtistDetails from '../../components/artists/details/index';
import ArtistEvent from '../../components/artists/event/index';

describe('ArtistSearch', () => {
  let wrapper;
  const mockedArtist = __fixtures__.artist;
  const mockedEvents = [
    { ...__fixtures__.event, id: 1 },
    { ...__fixtures__.event, id: 2 },
  ];

  const mockProps = () => ({
    fetchArtist: jest.fn().mockReturnValueOnce(mockedArtist),
    fetchArtistEvents: jest.fn().mockReturnValueOnce(mockedEvents),
    setArtist: jest.fn(),
    setEvents: jest.fn(),
  });

  it('renders without crashing', () => {
    wrapper = shallow(<ArtistSearch {...mockProps()} />);
    expect(wrapper).toBeDefined();
  });

  it('fetches and update artist', async () => {
    const props = mockProps();
    wrapper = shallow(<ArtistSearch {...props} />);

    await wrapper.instance().onSearchValueChange('foo');

    expect(props.setArtist).toHaveBeenCalledWith(mockedArtist);
  });

  it('fetches and update events', async () => {
    const props = mockProps();
    wrapper = shallow(<ArtistSearch {...props} />);

    await wrapper.instance().onSearchValueChange('foo');
    expect(props.setEvents).toHaveBeenCalledWith(mockedEvents);
  });

  it('set artist as null on error', async () => {
    const props = mockProps();
    props.fetchArtist = jest.fn().mockImplementation(() => {
      throw new Error('some error');
    });
    wrapper = shallow(<ArtistSearch {...props} />);

    await wrapper.instance().onSearchValueChange('bar');

    expect(props.setArtist).toBeCalledWith(null);
  });

  it('render artist details', () => {
    wrapper = shallow(<ArtistSearch {...mockProps()} artist={mockedArtist} />);

    const artistInfo = wrapper.find(ArtistDetails);

    expect(artistInfo.length).toEqual(1);

    expect(artistInfo.props().artist).toEqual(mockedArtist);
  });

  it('render artist events', () => {
    wrapper = shallow(
      <ArtistSearch
        {...mockProps()}
        artist={mockedArtist}
        events={mockedEvents}
      />,
    );

    expect(wrapper.find(ArtistEvent).length).toEqual(2);
    expect(
      wrapper
        .find(ArtistEvent)
        .at(0)
        .props().event,
    ).toEqual(mockedEvents[0]);
  });
});
