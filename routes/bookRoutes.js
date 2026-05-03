const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const bookController = require('../controllers/bookController');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

router.get('/', bookController.getAllBooks);
router.get('/add', bookController.getAddForm);
router.post('/add', upload.single('image'), bookController.addBook);
router.get('/edit/:id', bookController.getEditForm);
router.post('/edit/:id', upload.single('image'), bookController.updateBook);
router.post('/delete/:id', bookController.deleteBook);

module.exports = router;