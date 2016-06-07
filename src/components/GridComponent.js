'use strict';

import React from 'react';
import $ from 'jquery';

import ItemComponent from './ItemComponent';
import BaseConfig from '../config/base';

require('styles//Grid.sass');

class GridComponent extends React.Component {
    render() {
        return (
          <div className="grid-component">

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

    componentDidMount(){
        this.serverImagesRequest = $.get({
          url: BaseConfig.imagesApi.baseEndpoint,
          data: {
            method: 'flickr.galleries.getPhotos',
            format: BaseConfig.imagesApi.format,
            api_key: BaseConfig.imagesApi.key,
            gallery_id: this.props.galleryId,
            per_page: BaseConfig.grid.itemsPerPage,
            nojsoncallback: '?'
          },
          dataType: 'json',
          success: _onServerImagesSuccess.bind(this),
          error: resp => {
            console.error(resp);
          }
        });
    }
}

function _onServerImagesSuccess(images){
    console.log(images);
}

GridComponent.displayName = 'GridComponent';

export default GridComponent;
