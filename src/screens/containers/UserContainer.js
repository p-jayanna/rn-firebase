import React, {PureComponent} from 'react';
import UserPresenter from '../presenters/UserPresenter';
import {connect} from 'react-redux';

class UserContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.onArticlePress = this.onArticlePress.bind(this);
  }

  onArticlePress = article => {
    const {navigation} = this.props;
    navigation.navigate('article', article);
  };

  render() {
    const {
      articles,
      route: {params = {}},
    } = this.props;
    return (
      <UserPresenter
        articles={articles}
        onArticlePress={this.onArticlePress}
        user={params}
      />
    );
  }
}

const mapStateToProps = ({user: {user}, articles: {articles = []}}) => {
  return {user, articles};
};

export default connect(mapStateToProps)(UserContainer);
