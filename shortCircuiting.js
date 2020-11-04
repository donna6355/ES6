// #START:problem
function getIconPath(icon) {
    const path = icon.path ? icon.path : 'uploads/default.png';
    return `https://assets.foo.com/${path}`;
 }
// #END:problem
// if it is always true, why do we need to write twice?
// #START:or
function getIconPath(icon) {
    const path = icon.path || 'uploads/default.png';
    return `https://assets.foo.com/${path}`;
}
// #END:or
  


// #START:problem
function getFirstImage(userConfig) {
    let img = 'default.png';
    if (userConfig.images) {
      img = userConfig.images[0];
    }
    return img;
}
// #END:problem
//userConfig.images = []; 빈 문자열일 경우 문제 발생.

// #START:problem2
function getImage(userConfig) {
let img = 'default.png';
if (userConfig.images) {
    if (userConfig.images.length) {
    img = userConfig.images[0];
    }
}
return img;
}
// #END:problem2
// #START:and
function getImage(userConfig) {
if (userConfig.images && userConfig.images.length > 0) {
    return userConfig.images[0];
}
return 'default.png';
}
// #END:and

// #START:and
function getImage(userConfig) {
    const images = userConfig.images;
    return images && images.length ? images[0] : 'default.png';
}
 // #END:and