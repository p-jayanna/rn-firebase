import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import SearchPresenter from '../presenters/SearchPresenter';

class SearchContainer extends PureComponent {
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
      route: {params},
    } = this.props;
    return (
      <SearchPresenter
        searchKey={params}
        onArticlePress={this.onArticlePress}
        articles={articles}
      />
    );
  }
}

const mapStateToProps = ({user: {user, auth}, articles: {articles = []}}) => {
  return {user, auth, articles};
};

export default connect(mapStateToProps)(SearchContainer);
