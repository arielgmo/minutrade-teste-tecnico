import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';

const MainContainer = () => (
  <Provider store={store}>
    <div>
      Hello World
    </div>
  </Provider>
);

export default MainContainer;