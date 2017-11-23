// @flow
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import Page from './components/ui/page/index';
import ArtistSearch from './containers/search/index';

class App extends React.Component<{}> {
  render() {
    return (
      <div className="App">
        <Page>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={ArtistSearch} />
            </Switch>
          </BrowserRouter>
        </Page>
      </div>
    );
  }
}

export default App;
