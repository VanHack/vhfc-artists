// @flow
import * as React from 'react';

export default class Search extends React.Component<{}> {
  render() {
    return (
      <div className="ArtistSearch">
        <input type="text" className="input input-search" placeholder="Search" />
      </div>
    );
  }
}
