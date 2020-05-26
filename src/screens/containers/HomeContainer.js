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
    return (
      <HomePresenter
        onArticlePress={this.onArticlePress}
        onFloatingButtonPress={this.onFloatingButtonPress}
      />
    );
  }
}

const mapStateToProps = ({user: {user, auth}}) => {
  return {user, auth};
};

export default connect(mapStateToProps)(HomeContainer);
