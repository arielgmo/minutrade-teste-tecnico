import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Header from './Header/Header';
import ProductsContainer from './Product/ProductsContainer';
import StoresMap from './Store/StoresMap';
import './MainContainer.css';

const MainContainer = () => (
  <Provider store={store}>
    <div className="main-container">
      <Header />
      <div className="main-content-container">
        <ProductsContainer />
        <StoresMap />
      </div>
    </div>
  </Provider>
);

export default MainContainer;
