import React, {PureComponent} from 'react';
import LoginPresenter from '../presenters/LoginPresenter';
import {connect} from 'react-redux';

class LoginContainer extends PureComponent {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {};
  }

  componentDidMount() {
    const {navigation} = this.props;
    setTimeout(() => {
      navigation.navigate('home');
    }, 1000);
  }

  render() {
    return <LoginPresenter />;
  }
}

const mapStateToProps = ({user: {auth = {}}}) => {
  return auth;
};

export default connect(mapStateToProps)(LoginContainer);
