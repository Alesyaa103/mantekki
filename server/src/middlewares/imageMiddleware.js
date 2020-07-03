const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //check if image belongs to main content and choose folder to save
    console.log(file)
    const directory = req.body.purpose ? 'main' : 'posts';
    cb(null, `src/uploads/${directory}`)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const fileFilter = (req, file, cb) => {
  console.log(file,'bla')
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
    fileSize: 20000000 // ~ 20MB
  }
});

module.exports = upload.single("image");