import React from 'react';

import Search from './index';

describe('Search', () => {
  let wrapper;
  const artist = __fixtures__.artist;

  const mockActions = () => ({
    fetchArtist: jest.fn().mockReturnValueOnce(artist),
    setArtist: jest.fn(),
  });

  const inputHelper = value => {
    wrapper.find('input').simulate('input', { currentTarget: { value } });
  };

  it('renders without crashing', () => {
    wrapper = shallow(<Search />);
    expect(wrapper).toBeDefined();
  });

  /*
    Debounce cant be tested on Jest.
    See https://github.com/lodash/lodash/issues/2893
   */
  xit('call callback on input event', done => {
    const actions = mockActions();
    const callback = jest.fn();
    wrapper = shallow(
      <Search onInputChange={callback} debounceInterval={100} />,
    );

    inputHelper('foo');

    setTimeout(() => {
      expect(callback).toHaveBeenCalledWith('foo');
      done();
    }, 200);
  });

  /*
    Debounce cant be tested on Jest.
    See https://github.com/lodash/lodash/issues/2893
   */
  xit('debounce input event', done => {
    const callback = jest.fn();
    wrapper = shallow(
      <Search onInputChangeValue={callback} debounceInterval={10} />,
    );

    inputHelper('f');
    setTimeout(() => inputHelper('fo'), 5);
    setTimeout(() => inputHelper('foo'), 7);
    setTimeout(() => inputHelper('foo '), 17);

    setTimeout(() => {
      expect(callback).toHaveBeenCalledTimes(1);
      done();
    }, 17);
  });
});
