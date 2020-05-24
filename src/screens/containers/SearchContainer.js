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
    return <SearchPresenter onArticlePress={this.onArticlePress} />;
  }
}

const mapStateToProps = ({user: {user, auth}}) => {
  return {user, auth};
};

export default connect(mapStateToProps)(SearchContainer);
