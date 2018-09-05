const request = require('request');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const dir = 'images/qqfaces2';

const faceList = Array.from(new Array(105), (val, index) => {
  return `https://res.wx.qq.com/mpres/en_US/htmledition/pages/modules/common/emoji/images/smiley/smiley_${index}.png`;
});


const downloadPic = (src, dir) => {
  const picName = src.split('/').pop();
  const dest = path.join(dir, picName);
  request(src).pipe(fs.createWriteStream(dest).on('close', () => {
    console.log(src, 'done!');
  }));
}


mkdirp(dir, function (err) {
  if (err) {
    console.error(err)
    return;
  }

  faceList.forEach((url) => {
    downloadPic(url, dir);
  });
});