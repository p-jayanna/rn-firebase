import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import AddArticlePresenter from '../presenters/article/AddArticlePresenter';
import {ADD_ARTICLE} from '../../store/actions/action-types';
import {getRandomInt} from '../../services/getRandomNumbers';

class AddArticleContainer extends PureComponent {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {};
    this.onOpenCameraPress = this.onOpenCameraPress.bind(this);
    this.onPublishArticlePress = this.onPublishArticlePress.bind(this);
  }
  onOpenCameraPress = () => {
    const {navigation} = this.props;
    navigation.navigate('camera');
  };

  onPublishArticlePress = articleDetails => {
    const {
      dispatch,
      navigation,
      route: {params: {base64 = ''} = {}},
    } = this.props;

    const article = {
      ...articleDetails,
      id: getRandomInt(999),
      place: 'Javagal, Hassan',
      imagePath: base64,
    };
    dispatch({type: ADD_ARTICLE, payload: article});
    navigation.navigate('main');
  };
  render() {
    const {route: {params: {base64 = ''} = {}} = {}} = this.props;
    return (
      <AddArticlePresenter
        onOpenCameraPress={this.onOpenCameraPress}
        onPublishArticlePress={this.onPublishArticlePress}
        imageBase64={base64}
      />
    );
  }
}

const mapStateToProps = ({user: {auth = {}}}) => {
  return auth;
};

export default connect(mapStateToProps)(AddArticleContainer);
