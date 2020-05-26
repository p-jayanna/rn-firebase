import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import MapPresenter from '../presenters/MapPresenter';

class MapContainer extends PureComponent {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {};
  }

  render() {
    return <MapPresenter />;
  }
}

const mapStateToProps = ({user: {auth = {}}}) => {
  return auth;
};

export default connect(mapStateToProps)(MapContainer);
