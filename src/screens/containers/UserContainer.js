import React, {PureComponent} from 'react';
import UserPresenter from '../presenters/UserPresenter';
import {connect} from 'react-redux';

class UserContainer extends PureComponent {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {};
  }

  render() {
    return <UserPresenter />;
  }
}

const mapStateToProps = ({user: {auth = {}}}) => {
  return auth;
};

export default connect(mapStateToProps)(UserContainer);
