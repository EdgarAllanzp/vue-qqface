var sprite = require('node-sprite');
 
sprite.sprite('qqfaces2', {path: '../images'}, function(err, globalSprite) {
  console.log(globalSprite.filename())
//   console.log('foo', globalSprite.image('foo'));
//   console.log('bar', globalSprite.image('bar'));
});