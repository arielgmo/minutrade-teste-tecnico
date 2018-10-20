import React, { Component } from 'react';
import {
  Map,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import Geocode from 'react-geocode';
import { connect } from 'react-redux';
import { fetchStores } from '../../actions/storeActions';
import './StoresMap.css';

const tonerTiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tonerAttr = '&amp;copy <a href=https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places /> contributors';
const zoomLevel = 13;

class StoresMap extends Component {
  static propTypes = {
    onFetchStores: PropTypes.func,
    storeReducer: PropTypes.arrayOf({
      store: PropTypes.string,
      address: PropTypes.string,
    }),
  }

  static defaultProps = {
    onFetchStores: () => {},
    storeReducer: [],
  }

  componentWillMount() {
    const { onFetchStores } = this.props;
    onFetchStores();
  }

  getMarkers = (stores) => {
    stores.map(store => Geocode.fromAddress(store.address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        return (
          <Marker position={[lat, lng]}>
            <Popup>
              {`Loja: ${store.store}, Endereço: ${store.add}`}
            </Popup>
          </Marker>
        );
      },
    ));
  }

  render() {
    const { storeReducer } = this.props;
    return (
      <div className="store-map-container">
        <Card
          title={<p className="store-map-title">Our stores locations</p>}
          className="map-inner-container"
        >
          <Map
            center={[-23.5486, -46.6392]}
            zoom={zoomLevel}
            className="map-container"
          >
            <TileLayer
              attribution={tonerAttr}
              url={tonerTiles}
            />
            {this.getMarkers(storeReducer)}
          </Map>
        </Card>
      </div>
    );
  }
}

export default connect(
  ({ storeReducer }) => ({
    storeReducer,
  }),
  {
    onFetchStores: fetchStores,
  },
)(StoresMap);
