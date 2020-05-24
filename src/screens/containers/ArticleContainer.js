import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import ArticlePresenter from '../presenters/ArticlePresenter';

class HomeContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      route: {params},
    } = this.props;
    return <ArticlePresenter article={params} />;
  }
}

const mapStateToProps = ({user: {user, auth}}) => {
  return {user, auth};
};

export default connect(mapStateToProps)(HomeContainer);
