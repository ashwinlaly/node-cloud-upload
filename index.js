require('dotenv').config();

var fs = require('fs');
var cloudinary = require('cloudinary').v2;

console.log(process.env.CLOUDINARY_CLOUD_NAME);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET
});

cloudinary.uploader.upload('pizza.jpg', { public_id : '123',tags: 'basic_sample' })
  .then(function (image) {
    console.log("* " + image.public_id);
    console.log("* " + image.url);
  })
  .catch(function (err) {
    if (err) { console.warn(err); }
  });