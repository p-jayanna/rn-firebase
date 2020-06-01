import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {translate} from '../../i18n/i18n';
import HomePresenter from '../presenters/HomePresenter';

class HomeContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.onArticlePress = this.onArticlePress.bind(this);
    this.onFloatingButtonPress = this.onFloatingButtonPress.bind(this);
  }

  onArticlePress = article => {
    const {navigation} = this.props;
    navigation.navigate('article', article);
  };

  onFloatingButtonPress = () => {
    const {navigation} = this.props;
    navigation.navigate('addarticle');
  };

  render() {
    const {articles} = this.props;
    return (
      <HomePresenter
        onArticlePress={this.onArticlePress}
        onFloatingButtonPress={this.onFloatingButtonPress}
        articles={articles}
      />
    );
  }
}

const mapStateToProps = ({user: {user, auth}, articles: {articles = []}}) => {
  return {user, auth, articles};
};

export default connect(mapStateToProps)(HomeContainer);
