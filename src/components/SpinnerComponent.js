'use strict';

import React from 'react';

require('styles//vendor/spinner.css');

class SpinnerComponent extends React.Component {
  render() {

    return (
      <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
        <div className="sk-cube3 sk-cube"></div>
      </div>
    );
  }
}

SpinnerComponent.displayName = 'SpinnerComponent';

export default SpinnerComponent;
