'use strict';

import React from 'react';
import $ from 'jquery';

import ItemComponent from './ItemComponent';
import BaseConfig from '../config/base';
import {getFlickrUrl} from '../helpers/images.helper';

require('styles//Grid.sass');


class GridComponent extends React.Component {
    render() {
        if(this.state && this.state.images && this.state.images){
            return (
              <div className="grid-component">
                    {this.state.images.map(function(image, index){
                        let imageUrl = getFlickrUrl(image.farm, image.server, image.id, image.secret, 'z');
                        return (
                            <ItemComponent image={imageUrl} imageId={image.id}></ItemComponent>
                        );
                    })}
              </div>
            );
        }else{
            return <div>Loading...</div>
        }
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
          success: _onServerImagesSuccess.bind(this)
        });
    }
}

function _onServerImagesSuccess(images){
    this.setState({
        images: images.photos.photo
    });
    console.log(this.state);
}

GridComponent.displayName = 'GridComponent';

export default GridComponent;
