import React                      from 'react';
import ReactDOM                   from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { createStore }            from 'redux';
import { Provider }               from 'react-redux';
import { syncHistoryWithStore }   from 'react-router-redux';

import reducers                   from './reducers';
import routes                     from './routes';

const store = createStore(reducers);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
), document.getElementById('app'));
