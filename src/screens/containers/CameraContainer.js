import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import CameraPresenter from '../presenters/CameraPresenter';

class CameraContainer extends PureComponent {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {};
  }
  onImageCapture = capturedImage => {
    const {navigation} = this.props;
    navigation.navigate('addarticle', capturedImage);
  };

  render() {
    return <CameraPresenter onImageCapture={this.onImageCapture} />;
  }
}

const mapStateToProps = ({user: {auth = {}}}) => {
  return auth;
};

export default connect(mapStateToProps)(CameraContainer);
