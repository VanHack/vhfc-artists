import React from 'react';

import ArtistDetails from './index';

describe('ArtistDetails', () => {
  let wrapper;
  const mockArtist = __fixtures__.artist;

  it('renders artist data', () => {
    wrapper = mount(<ArtistDetails artist={mockArtist} />);
    const name = wrapper.find('.ArtistDetails_name').text();
    const picture = wrapper.find('.ArtistDetails_picture_instance').getDOMNode()
      .attributes.src.value;
    const facebookUrl = wrapper.find('.ArtistDetails_facebook').getDOMNode()
      .attributes.href.value;

    expect(name).toEqual(mockArtist.name);
    expect(picture).toEqual(mockArtist.thumb_url);
    expect(facebookUrl).toEqual(mockArtist.facebook_page_url);
  });

  it('do not renders facebook button', () => {
    const _artist = { ...mockArtist, facebook_page_url: '' };
    wrapper = shallow(<ArtistDetails artist={_artist} />);

    expect(wrapper.find('.ArtistDetails_facebook').length).toEqual(0);
  });
});
