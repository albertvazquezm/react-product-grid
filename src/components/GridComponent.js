'use strict';

import React from 'react';
import $ from 'jquery';

import ItemComponent from './ItemComponent';
import BaseConfig from '../config/base';
import {getFlickrUrl} from '../helpers/images.helper';

require('styles//Grid.sass');

const IMAGE_SIZE_FORMAT = 'b';

class GridComponent extends React.Component {
    constructor(){
      super();
      this.state = {
        images: []
      };
      this.currentPage = 1;
    }
    render() {
      return (
        <div className="grid-component container">
          <h1 className="grid-title">{this.props.title}</h1>
          <div className="row">
              {this.state.images.map(function(image, index){
                  let imageUrl = getFlickrUrl(image.farm, image.server, image.id, image.secret, IMAGE_SIZE_FORMAT);
                  return (
                    <div className="col-md-3 col-sm-6 grid-item">
                      <ItemComponent image={imageUrl} ownerId={image.owner} imageId={image.id}></ItemComponent>
                    </div>
                  );
              })}
          </div>
          <div className="text-center">
            <button className="btn btn-default load-more" onClick={this.loadNextPage.bind(this)}>Load more</button>
          </div>
        </div>
      );
    }
    componentDidMount(){
      _loadPage.call(this);
    }
    loadNextPage(){
      _incrementPage.call(this);
      _loadPage.call(this);
    }
}

function _onServerImagesSuccess(apiResponse){
  let images = apiResponse.photos.photo;
  this.setState({
    images: this.state.images.concat(images)
  });
}

function _incrementPage(){
  this.currentPage ++;
}

function _loadPage(){
  this.serverImagesRequest = $.get({
    url: BaseConfig.imagesApi.baseEndpoint,
    data: {
      method: 'flickr.galleries.getPhotos',
      format: BaseConfig.imagesApi.format,
      api_key: BaseConfig.imagesApi.key,
      gallery_id: this.props.galleryId,
      per_page: BaseConfig.grid.itemsPerPage,
      page: this.currentPage,
      nojsoncallback: '?'
    },
    dataType: 'json',
    success: _onServerImagesSuccess.bind(this)
  });
}

GridComponent.displayName = 'GridComponent';

export default GridComponent;
