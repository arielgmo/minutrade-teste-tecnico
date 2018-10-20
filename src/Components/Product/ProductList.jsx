import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  Icon,
  Button,
} from 'antd';
import 'antd/dist/antd.css';
import { removeProduct } from '../../actions/productActions';
import './ProductList.css';

const { Meta } = Card;

class ProductList extends Component {
  static propTypes = {
    onRemoveProduct: PropTypes.func,
    productReducer: PropTypes.arrayOf({
      name: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    }),
  }

  static defaultProps = {
    onRemoveProduct: () => {},
    productReducer: [],
  }

  getCards = () => {
    const { productReducer, onRemoveProduct } = this.props;
    return productReducer.map(product => (
      <Col id={`${product.name}-col`} span={8} className="card-container">
        <Card
          hoverable
          style={{ width: '100%' }}
          cover={<img className="product-image" alt={`${product.name}-product`} src={product.image} />}
          actions={[
            <Button onClick={() => onRemoveProduct(product.name)}>
              <Icon type="close" />
            </Button>,
          ]}
        >
          <Meta
            title={product.name}
            description={<p className="product-description">{product.description}</p>}
          />
        </Card>
      </Col>
    ));
  }

  render() {
    return (
      <div>
        <Row>
          <p className="products-title">Our Products:</p>
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
