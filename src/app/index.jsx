// @flow
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'redux-zero/react';

import './index.css';
import store from './redux/store';
import Page from './components/ui/page/index';
import Search from './containers/search/index';

class App extends React.Component<{}> {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Page>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Search} />
              </Switch>
            </BrowserRouter>
          </Page>
        </Provider>
      </div>
    );
  }
}

export default App;
