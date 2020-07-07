import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import LoadingPresenter from '../presenters/LoadingPresenter';
import VideoPresenter from '../presenters/VideoPresenter';

class LoadingContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const {
      device: {fcmToken = ''},
    } = this.props;
    return <VideoPresenter />;
  }
}

const mapStateToProps = ({device = {}}) => {
  return {device};
};

export default connect(mapStateToProps)(LoadingContainer);
