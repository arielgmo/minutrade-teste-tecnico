import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Header from './Header/Header';
import ProductsContainer from './Product/ProductsContainer';
import StoresMap from './Store/StoresMap';

const MainContainer = () => (
  <Provider store={store}>
    <div>
      <Header />
      <ProductsContainer />
      <StoresMap />
    </div>
  </Provider>
);

export default MainContainer;
