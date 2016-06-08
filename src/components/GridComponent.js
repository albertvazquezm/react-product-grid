'use strict';

import React from 'react';
import $ from 'jquery';

import ItemComponent from './ItemComponent';
import BaseConfig from '../config/base';
import {getFlickrUrl} from '../helpers/images.helper';

require('styles//Grid.sass');


class GridComponent extends React.Component {
    constructor(){
      super();
      this.state = {
        page: 1,
        images: []
      }
    }
    render() {
      return (
        <div className="grid-component container">
          <h1 className="grid-title">{this.props.title}</h1>
          <div className="row">
              {this.state.images.map(function(image, index){
                  let imageUrl = getFlickrUrl(image.farm, image.server, image.id, image.secret, 'z');
                  return (
                    <div className="col-md-3 col-sm-6 grid-item">
                      <ItemComponent image={imageUrl} imageId={image.id}></ItemComponent>
                    </div>
                  );
              })}
          </div>
          <div className="text-center">
            <button className="btn btn-default load-more" onClick={this.loadNextPage}>Load more</button>
          </div>
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
            page: this.state.page,
            nojsoncallback: '?'
          },
          dataType: 'json',
          success: _onServerImagesSuccess.bind(this)
        });
    }
    loadNextPage(){
      _incrementPage.call(this);
      this.serverImagesRequest = $.get({
        url: BaseConfig.imagesApi.baseEndpoint,
        data: {
          method: 'flickr.galleries.getPhotos',
          format: BaseConfig.imagesApi.format,
          api_key: BaseConfig.imagesApi.key,
          gallery_id: this.props.galleryId,
          per_page: BaseConfig.grid.itemsPerPage,
          page: this.state.page,
          nojsoncallback: '?'
        },
        dataType: 'json',
        success: _onServerImagesPageSuccess.bind(this)
      });
    }
}

function _onServerImagesSuccess(images){
  this.setState({
    images: images.photos.photo
  });
}

function _onServerImagesPageSuccess(images){
  this.setState({
    images: this.state.images.photos.photo.concat(images)
  });
}

function _incrementPage(){
  this.setState({
    page: this.state.page ++
  });
}

GridComponent.displayName = 'GridComponent';

export default GridComponent;
