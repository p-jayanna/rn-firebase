import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import ArticlePresenter from '../presenters/article/ArticlePresenter';

class ArticleContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.onUserCardPressed = this.onUserCardPressed.bind(this);
  }

  onUserCardPressed = () => {
    const {navigation} = this.props;
    navigation.navigate('user');
  };

  render() {
    const {
      route: {params},
      user,
    } = this.props;
    return (
      <ArticlePresenter
        article={params}
        user={user}
        onUserCardPressed={this.onUserCardPressed}
      />
    );
  }
}

const mapStateToProps = ({user: {user, auth}}) => {
  return {user, auth};
};

export default connect(mapStateToProps)(ArticleContainer);
