import React from 'react';
import { browserHistory, Router } from 'react-router';
import { object } from 'prop-types';
import { Provider } from 'react-redux';
import Event from '../components/Event/Event';

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <div style={{ height: '100%' }}>
        <Router history={browserHistory} />
        <Event />
      </div>
    </Provider>
  );
};

App.propTypes = {
  store: object.isRequired
};

export default App;
