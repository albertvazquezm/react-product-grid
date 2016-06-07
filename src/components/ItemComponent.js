'use strict';

import React from 'react';

require('styles//Item.sass');

class ItemComponent extends React.Component {
  render() {
    return (
        <div class="item">
            <img src={this.props.image}/>
            <div class="item-info">{this.props.imageId}</div>
        </div>
    );
  }
}

ItemComponent.displayName = 'ItemComponent';

export default ItemComponent;
