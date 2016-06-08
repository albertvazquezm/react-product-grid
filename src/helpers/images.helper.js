'use strict';

/**
 * Returns flickr absolute image url
 * @param {Number} farmId   Farm ID
 * @param {Number} serverId Server ID
 * @param {Number} id       Image ID
 * @param {String} secret   Secret
 * @param {String} size     Size indicator
 */
export function getFlickrUrl(farmId, serverId, id, secret, size){
    return `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}_${size}.jpg`
}

/**
* Preloads an image in browser cache
* @param {String} url The image URL
* @returns {Promise} Promise that returns image url when resolved
*/
export function preloadImage(url){
  var preloadImagePromise = new Promise(function(resolve, reject){
    let image = new Image();
    image.src = url;
    image.onload = () => {
      resolve(url);
    }
  });
  return preloadImagePromise;
}
