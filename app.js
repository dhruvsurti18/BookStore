const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

app.use('/', require('./routes/bookRoutes'));

app.listen(3000, () => console.log('Server started on port 3000'));
