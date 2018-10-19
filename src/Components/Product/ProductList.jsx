import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Card,
  Icon,
  Button,
} from 'antd';
import 'antd/dist/antd.css';
import { removeProduct } from '../../actions/productActions';

const { Meta } = Card;

class ProductList extends Component {
  getCards = () => {
    const { productReducer, onRemoveProduct } = this.props;
    return productReducer.map(product => (
      <Col id={`${product.name}-col`} span={8}>
        <Card
          hoverable
          style={{ width: '100%' }}
          cover={<img alt={`${product.name}-product`} src={product.image} />}
          actions={[
            <Button onClick={() => onRemoveProduct(product.name)}>
              <Icon type="close" />
            </Button>,
          ]}
        >
          <Meta
            title={product.name}
            description={product.description}
          />
        </Card>
      </Col>
    ));
  }

  render() {
    return (
      <div>
        <Row>
          <p>Our Products</p>
        </Row>
        <Row>
          {this.getCards()}
        </Row>
      </div>
    );
  }
}

export default connect(
  ({ productReducer }) => ({
    productReducer,
  }),
  {
    onRemoveProduct: removeProduct,
  },
)(ProductList);
