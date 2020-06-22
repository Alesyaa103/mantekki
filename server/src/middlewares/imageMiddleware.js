const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //check if image belongs to main content and choose folder to save
    const directory = req.body.purpose ? 'main' : 'posts';
    cb(null, `../static/${directory}`)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const fileFilter = (req, file, cb) => {
  if(file.mimetype === "image/jpg"|| 
  file.mimetype === "image/jpeg"){
    cb(null, true);
  }
  else{
    cb(null, false);
  }
}

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10000000 // ~ 10MB
  }
});

module.exports = upload.single("image");