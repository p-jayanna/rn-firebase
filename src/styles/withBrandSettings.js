import React from 'react';
import {BrandContext} from './BrandSettings';

export function withBrandSettings(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <BrandContext.Consumer>
          {settings => <WrappedComponent {...settings} {...this.props} />}
        </BrandContext.Consumer>
      );
    }
  };
}
