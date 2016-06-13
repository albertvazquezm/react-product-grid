'use strict';

import $ from 'jquery';

import React from 'react';
import BaseConfig from '../config/base';
import SpinnerComponent from './SpinnerComponent';
import {preloadImage} from '../helpers/images.helper';

require('styles//Item.sass');

class ItemComponent extends React.Component {
  constructor(){
    super();
    this.state = {};
  }
  render() {
    if(this.state.imageUrl){
      var imageElement = <img src={this.state.imageUrl}/>
    }else{
      var imageElement = <SpinnerComponent></SpinnerComponent>
    }
    if(this.state.owner){
        var ownerNameContent = <p><a href={this.state.owner.url} target="_blank">{this.state.owner.name}</a></p>
    }else{
        var ownerNameContent = <p>Loading...</p>
    }
    return (
        <div className="item">
          <div className="triangle" onMouseEnter={this.onImageHover.bind(this)}>
            {imageElement}
            <div className="caption">
              {ownerNameContent}
            </div>
          </div>
        </div>
    );
  }
  componentDidMount(){
    preloadImage(this.props.image).then(url => {
      this.setState({
        imageUrl: url
      });
    });
  }
    onImageHover(){
        if(!this.state.owner){
            _loadImageAuthorInfo.call(this);
        }
    }
}

function _loadImageAuthorInfo(){
    this.imageAuthorInfoRequest = $.get({
        url: BaseConfig.imagesApi.baseEndpoint,
        data: {
            method: 'flickr.people.getInfo',
            api_key: BaseConfig.imagesApi.key,
            format: BaseConfig.imagesApi.format,
            user_id: this.props.ownerId,
            nojsoncallback: '?'
        },
        dataType: 'json',
        success: _onLoadImageAuthorInfoSuccess.bind(this)
    });
}

function _onLoadImageAuthorInfoSuccess(response){
    this.setState({
        owner: {
            name: response.person.path_alias,
            url: response.person.profileurl._content
        }
    })
}

ItemComponent.displayName = 'ItemComponent';

export default ItemComponent;
