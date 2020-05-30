import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import AddArticlePresenter from '../presenters/article/AddArticlePresenter';

class AddArticleContainer extends PureComponent {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {};
    this.onOpenCameraPress = this.onOpenCameraPress.bind(this);
  }
  onOpenCameraPress = () => {
    const {navigation} = this.props;
    navigation.navigate('camera');
  };
  render() {
    return <AddArticlePresenter onOpenCameraPress={this.onOpenCameraPress} />;
  }
}

const mapStateToProps = ({user: {auth = {}}}) => {
  return auth;
};

export default connect(mapStateToProps)(AddArticleContainer);
