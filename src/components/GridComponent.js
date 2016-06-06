'use strict';

import React from 'react';

import ItemComponent from './ItemComponent';
import BaseConfig from '../config/base';

require('styles//Grid.sass');

class GridComponent extends React.Component {
    render() {
        return (
          <div className="grid-component">
            for(i = 0; i < )
            <div class="grid-item">

            </div>
                <ItemComponent image="http://placehold.it/200x200" itemInfo="Author: John Smith"></ItemComponent>
                <ItemComponent image="http://placehold.it/200x200" itemInfo="Author: John Smith"></ItemComponent>
                <ItemComponent image="http://placehold.it/200x200" itemInfo="Author: John Smith"></ItemComponent>
                <ItemComponent image="http://placehold.it/200x200" itemInfo="Author: John Smith"></ItemComponent>
                <ItemComponent image="http://placehold.it/200x200" itemInfo="Author: John Smith"></ItemComponent>
          </div>
        );
    }
    componentDidMount: function() {
        this.serverRequest = $.get(BaseConfig.imagesApi.baseEndpoint + '/galleries/getPhotos', function (photos) {
          var lastGist = result[0];
          this.setState({
            username: lastGist.owner.login,
            lastGistUrl: lastGist.html_url
          });
        }.bind(this));
    },
}

GridComponent.displayName = 'GridComponent';

// Uncomment properties you need
// GridComponent.propTypes = {};
// GridComponent.defaultProps = {};

export default GridComponent;
