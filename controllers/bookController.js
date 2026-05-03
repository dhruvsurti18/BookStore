const Book = require('../models/Book');
const path = require('path');
const fs = require('fs');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.render('index', { books, totalBooks: books.length });
  } catch (err) {
  }
};

exports.getAddForm = (req, res) => {
  res.render('addBook');
};
exports.addBook = async (req, res) => {
  try {
    const { title, author, category, price, quantity, description } = req.body;
    const image = req.file ? req.file.filename : '';

    const book = new Book({ title, author, category, price, quantity, description, image });
    await book.save();
    res.redirect('/');
  } catch (err) {
  }
};

exports.getEditForm = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).send('Book not found');
    res.render('editBook', { book });
  } catch (err) {
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { title, author, category, price, quantity, description } = req.body;
    const updateData = { title, author, category, price, quantity, description };

    if (req.file) {
      const oldBook = await Book.findById(req.params.id);
      if (oldBook && oldBook.image) {
        const oldPath = path.join(__dirname, '../uploads', oldBook.image);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      updateData.image = req.file.filename;
    }

    await Book.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.redirect('/');
  } catch (err) {
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book && book.image) {
      const imgPath = path.join(__dirname, '../uploads', book.image);
      if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
    }
    await Book.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
  }
};
