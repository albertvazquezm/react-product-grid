'use strict';

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
    return (
        <div className="item">
          <div className="triangle">
            {imageElement}
            <div className="item-info">{this.props.imageId}</div>
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
}

ItemComponent.displayName = 'ItemComponent';

export default ItemComponent;
