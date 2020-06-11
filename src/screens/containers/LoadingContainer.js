import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import LoadingPresenter from '../presenters/LoadingPresenter';

class LoadingContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {navigation} = this.props;
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  }

  render() {
    const {
      device: {fcmToken = ''},
    } = this.props;
    return <LoadingPresenter fcmToken={fcmToken} />;
  }
}

const mapStateToProps = ({device = {}}) => {
  return {device};
};

export default connect(mapStateToProps)(LoadingContainer);
