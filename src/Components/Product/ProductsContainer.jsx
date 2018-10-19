import React from 'react';
import {
  Row,
  Col,
} from 'antd';
import 'antd/dist/antd.css';
import AddProductForm from './AddProductForm';
import ProductList from './ProductList';

const ProductsContainer = () => (
  <Row>
    <Col span={24}>
      <AddProductForm />
    </Col>
    <Col span={24}>
      <ProductList />
    </Col>
  </Row>
);

export default ProductsContainer;
