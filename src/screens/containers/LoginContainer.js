import React, {PureComponent} from 'react';
import LoginPresenter from '../presenters/login/LoginPresenter';
import {connect} from 'react-redux';

class LoginContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.verifyUser = this.verifyUser.bind(this);
  }

  verifyUser = () => {
    const {navigation} = this.props;
    navigation.navigate('main');
  };

  render() {
    return <LoginPresenter verifyUser={this.verifyUser} />;
  }
}

const mapStateToProps = ({device = {}}) => {
  return {device};
};

export default connect(mapStateToProps)(LoginContainer);
