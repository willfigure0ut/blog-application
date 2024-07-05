const multer = require('multer');
const { storage } = require('../connectCloudinary');

const upload = multer({ storage: storage });

module.exports = upload;