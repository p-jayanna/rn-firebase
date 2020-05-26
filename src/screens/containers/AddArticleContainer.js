import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import AddArticlePresenter from '../presenters/article/AddArticlePresenter';

class AddArticleContainer extends PureComponent {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {};
   }

  render() {
    return <AddArticlePresenter />;
  }
}

const mapStateToProps = ({user: {auth = {}}}) => {
  return auth;
};

export default connect(mapStateToProps)(AddArticleContainer);
