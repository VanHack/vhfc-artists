import React from 'react';

import ArtistEvent from './index';

describe('ArtistEvent', () => {
  let wrapper;
  const mockedEvent = __fixtures__.event;

  it('renders event city', () => {
    wrapper = shallow(<ArtistEvent event={mockedEvent} />);

    expect(wrapper.find('.ArtistEvent_city').text().trim()).toEqual(
      'United States, Las Vegas'
    );
  });

  it('renders event date', () => {
    wrapper = shallow(<ArtistEvent event={mockedEvent} />);

    expect(wrapper.find('.ArtistEvent_date').text().trim()).toEqual(
      'Sun, Mar 19, 2017 11:00 AM'
    );
  });

  it('renders event date', () => {
    wrapper = shallow(<ArtistEvent event={mockedEvent} />);

    expect(wrapper.find('.ArtistEvent_venue').text().trim()).toEqual(
      'Encore Beach Club'
    );
  });
});
