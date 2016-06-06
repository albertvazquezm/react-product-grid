'use strict';

import React from 'react';

require('styles//Item.sass');

class ItemComponent extends React.Component {
  render() {
    return (
        <div class="item">
            <img src="{this.props.image}"/>
            <div class="item-info">{this.props.itemInfo}</div>
        </div>
    );
  }
}

ItemComponent.displayName = 'ItemComponent';

// Uncomment properties you need
// ItemComponent.propTypes = {};
// ItemComponent.defaultProps = {};

export default ItemComponent;
