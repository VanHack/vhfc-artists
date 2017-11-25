import React from 'react';

import { Search } from './index';

describe('Search', () => {
  let wrapper;

  const mockActions = () => ({
    fetchArtist: jest.fn(),
  });

  const inputHelper = value => {
    wrapper.find('input').simulate('input', { currentTarget: { value } });
  };

  it('renders without crashing', () => {
    wrapper = shallow(<Search {...mockActions()} />);
    expect(wrapper).toBeDefined();
  });

  /*
    Debounce cant be tested on Jest.
    See https://github.com/lodash/lodash/issues/2893
   */
  xit('fetch user info on input event', done => {
    //const actions = mockActions();
    //wrapper = shallow(<Search {...actions} debounceInterval={100} />);
    //
    //inputHelper('foo');
    //
    //setTimeout(() => {
    //  expect(actions.fetchArtist).not.toHaveBeenCalledWith('foo');
    //  done();
    //}, 200);
  });

  /*
    Debounce cant be tested on Jest.
    See https://github.com/lodash/lodash/issues/2893
   */
  xit('debounce input event', done => {
    //  const actions = mockActions();
    //  wrapper = shallow(<Search {...actions} debounceInterval={10} />);
    //
    //  inputHelper('f');
    //  setTimeout(() => inputHelper('fo'), 5);
    //  setTimeout(() => inputHelper('foo'), 7);
    //  setTimeout(() => inputHelper('foo '), 17);
    //
    //  setTimeout(() => {
    //    expect(actions.fetchArtist).toHaveBeenCalledTimes(1);
    //    done();
    //  }, 17);
  });
});
