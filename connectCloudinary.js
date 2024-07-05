const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: "dy6duehis",
  api_key: "764866514241254",
  api_secret: "_YIkv52H82qVC0BLYd7UtOi5Hf8"
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'thumbnails',
    allowed_formats: ['jpg', 'png', 'jpeg', 'gif']
  },
});

module.exports = {
  cloudinary,
  storage
};