require('normalize.css/normalize.css');
require('styles//App.sass');

import React from 'react';
import GridComponent from './GridComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <GridComponent galleryId="72157663296681380" title="Weird Objects"></GridComponent>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
