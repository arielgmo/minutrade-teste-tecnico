import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Input,
  Button,
} from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { addProduct } from '../../actions/productActions';

const FormItem = Form.Item;

class AddProductForm extends Component {
  static propTypes = {
    onAddProduct: PropTypes.func,
  }

  static defaultProps = {
    onAddProduct: () => {},
  }

  state={
    productName: '',
    productDescription: '',
    productImageURL: '',
  }

  onChangeName = (name) => {
    this.setState(prevState => ({
      ...prevState,
      productName: name,
    }));
  }

  onChangeDescription = (description) => {
    this.setState(prevState => ({
      ...prevState,
      productDescription: description,
    }));
  }

  onChangeImage = (imageURL) => {
    this.setState(prevState => ({
      ...prevState,
      productImageURL: imageURL,
    }));
  }

  handleSubmit = () => {
    const {
      productName,
      productDescription,
      productImageURL,
    } = this.state;

    const { onAddProduct } = this.props;

    if (productName !== null && productName !== '') {
      if (productDescription !== null && productDescription !== '') {
        if (productImageURL !== null && productImageURL !== '') {
          onAddProduct({
            name: productName,
            description: productDescription,
            image: productImageURL,
          });
        }
      }
    }
  }

  render() {
    return (
      <Form>
        <FormItem label="Name">
          <Input
            placeholder="Product Name"
            onChange={event => this.onChangeName(event.target.value)}
          />
        </FormItem>
        <FormItem label="Description">
          <Input
            placeholder="Product Description"
            onChange={event => this.onChangeDescription(event.target.value)}
          />
        </FormItem>
        <FormItem label="Image URL">
          <Input
            placeholder="Product Image URL"
            onChange={event => this.onChangeImage(event.target.value)}
          />
        </FormItem>
        <FormItem>
          <Button type="primary" onClick={this.handleSubmit}>
            Add Product
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default connect(null, { onAddProduct: addProduct })(AddProductForm);
