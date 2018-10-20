import React from 'react';
import {
  Row,
  Col,
  Card,
} from 'antd';
import 'antd/dist/antd.css';
import AddProductForm from './AddProductForm';
import ProductList from './ProductList';
import './ProductsContainer.css';

const ProductsContainer = () => (
  <Card title="Add a new product" className="products-container">
    <Row>
      <Col span={24}>
        <AddProductForm />
      </Col>
      <Col span={24}>
        <ProductList />
      </Col>
    </Row>
  </Card>
);

export default ProductsContainer;
