import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {translate} from '../../i18n/i18n';
import HomePresenter from '../presenters/HomePresenter';

class HomeContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <HomePresenter />;
  }
}

const mapStateToProps = ({user: {user, auth}}) => {
  return {user, auth};
};

export default connect(mapStateToProps)(HomeContainer);
