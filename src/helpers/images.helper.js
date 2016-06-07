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
