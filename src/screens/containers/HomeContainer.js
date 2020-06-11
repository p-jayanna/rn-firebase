import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import HomePresenter from '../presenters/HomePresenter';

class HomeContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.onArticlePress = this.onArticlePress.bind(this);
    this.onFloatingButtonPress = this.onFloatingButtonPress.bind(this);
    this.onCategorySelected = this.onCategorySelected.bind(this);
  }

  onArticlePress = article => {
    const {navigation} = this.props;
    navigation.navigate('article', article);
  };

  onFloatingButtonPress = () => {
    const {navigation} = this.props;
    navigation.navigate('addarticle');
  };

  onCategorySelected = selectedItem => {
    const {navigation} = this.props;
    navigation.navigate('search', selectedItem);
  };

  render() {
    const {articles} = this.props;
    return (
      <HomePresenter
        onArticlePress={this.onArticlePress}
        onFloatingButtonPress={this.onFloatingButtonPress}
        articles={articles}
        onCategorySelected={this.onCategorySelected}
      />
    );
  }
}

const mapStateToProps = ({user: {user, auth}, articles: {articles = []}}) => {
  return {user, auth, articles};
};

export default connect(mapStateToProps)(HomeContainer);
