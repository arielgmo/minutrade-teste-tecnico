import React from 'react';
import {
  Row,
  Col,
} from 'antd';
import 'antd/dist/antd.css';
import './Header.css';

const Header = () => (
  <Row>
    <Col span={24} className="header-col">
      <p className="header-text">Store Products</p>
    </Col>
  </Row>
);

export default Header;
