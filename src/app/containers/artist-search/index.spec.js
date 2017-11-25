import React from 'react';

import { ArtistSearch } from './index';

describe('ArtistSearch', () => {
  let wrapper;
  const mockedArtist = __fixtures__.artist;

  const mockProps = () => ({
    fetchArtist: jest.fn().mockReturnValueOnce(mockedArtist),
    setArtist: jest.fn(),
  });

  it('renders without crashing', () => {
    wrapper = shallow(<ArtistSearch {...mockProps()} />);
    expect(wrapper).toBeDefined();
  });

  it('fetch and update artist', async () => {
    const props = mockProps();
    wrapper = shallow(<ArtistSearch {...props} />);

    await wrapper.instance().onSearchValueChange('foo');

    expect(props.setArtist).toHaveBeenCalledWith(mockedArtist);
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
});
