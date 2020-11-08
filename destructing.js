const landscape = {
    title: 'Landscape',
    photographer: 'Nathan',
    equipment: 'Canon',
    format: 'digital',
    src: '/landscape-nm.jpg',
    location: [32.7122222, -103.1405556],
};


function displayPhoto(photo) {
    const title = photo.title;
    const photographer = photo.photographer || 'Anonymous';
    const location = photo.location;
    const url = photo.src;
  
    const copy = { ...photo };
    delete copy.title;
    delete copy.photographer;
    delete copy.location;
    delete copy.src;
  
    const additional = Object.keys(copy).map(key => `${key}: ${copy[key]}`);
  
    return (`
      <img alt="${title} 사진 ${photographer} 촬영" src="${url}" />
      <div>${title}</div>
      <div>${photographer}</div>
      <div>위도: ${location[0]} </div>
      <div>경도: ${location[1]} </div>
      <div>${additional.join(' <br/> ')}</div>
    `);
}

//destructing
const {photographer, ...additional} = landscape;
console.log(`I am a photographer, ${photographer}`);
console.dir(additional);

//key 변경하여 destructing
const {src : url} = landscape;
// console.log(`src : ${src}`);//src is not defined
console.log(`url : ${url}`);



// simple coding with destructing parameters에 바로 destructing
function displayPhoto({
    title,
    photographer = 'Anonymous',
    location: [latitude, longitude],
    src: url,
    ...other
  }) {
    const additional = Object.keys(other).map(key => `${key}: ${other[key]}`);
    return (`
      <img alt="${title} 사진 ${photographer} 촬영" src="${url}" />
      <div>${title}</div>
      <div>${photographer}</div>
      <div>위도: ${latitude} </div>
      <div>경도: ${longitude} </div>
      <div>${additional.join(' <br/> ')}</div>
    `);
  }