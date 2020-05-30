import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import CameraPresenter from '../presenters/CameraPresenter';

class CameraContainer extends PureComponent {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {};
  }

  render() {
    return <CameraPresenter />;
  }
}

const mapStateToProps = ({user: {auth = {}}}) => {
  return auth;
};

export default connect(mapStateToProps)(CameraContainer);
