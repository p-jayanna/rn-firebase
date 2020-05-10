import React, {PureComponent} from 'react';
import LoginPresenter from '../presenters/LoginPresenter';
import {connect} from 'react-redux';
import {USER_AUTH} from '../../store/actions/action-types';

class LoginContainer extends PureComponent {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {};
  }

  componentDidMount() {
    const {dispatch} = this.props;
    setTimeout(() => {
      dispatch({
        type: USER_AUTH,
        payload: {isAuthenticated: true},
      });
    }, 5000);
  }

  render() {
    return <LoginPresenter />;
  }
}

const mapStateToProps = ({user: {auth = {}}}) => {
  return auth;
};

export default connect(mapStateToProps)(LoginContainer);
