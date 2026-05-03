# BookStore Management System

A full-stack Book Store Management System built using Node.js, Express.js, MongoDB, EJS, and Multer with complete CRUD operations and a Bootstrap 5 dark-themed UI.

---

## Problem Definition

To create a web-based Book Store Management System that allows users to manage book records efficiently. The system uses MongoDB for data storage, EJS for frontend rendering, Multer for handling book cover image uploads, and Bootstrap 5 for the UI.

---

## Folder Structure

```
BookStore/
├── controllers/
│   └── bookController.js     - CRUD logic
├── models/
│   └── Book.js               - Mongoose schema
├── routes/
│   └── bookRoutes.js         - Express routes + Multer config
├── views/
│   ├── partials/
│   │   ├── header.ejs        - Navbar and head section
│   │   └── footer.ejs        - Footer section
│   ├── index.ejs             - View all books
│   ├── addBook.ejs           - Add book form
│   ├── editBook.ejs          - Edit book form
│   └── 404.ejs               - 404 error page
├── public/
│   └── css/
│       └── style.css         - Custom dark theme styles
├── uploads/                  - Uploaded book images (auto-created)
├── app.js                    - Server entry point
├── package.json
├── .gitignore
└── README.md
```

---

## Features

- Add Book: Form with title, author, category, price, quantity, description, and cover image upload
- View All Books: Responsive Bootstrap card grid with all book details and images
- Edit Book: Pre-filled form with option to replace cover image
- Delete Book: One-click delete with confirmation dialog
- Image Upload: Multer middleware handles file upload and storage in the uploads folder
- Image Preview: Live preview before submitting the form
- Book Count: Shows total number of books in the collection
- Dark Theme UI: Bootstrap 5 with a custom dark color scheme and animations
- Responsive: Works on mobile, tablet, and desktop screens
- MVC Architecture: Clean separation of Model, View, and Controller

---

## Tech Stack

| Technology     | Purpose                        |
|----------------|-------------------------------|
| Node.js        | Runtime environment            |
| Express.js     | Web framework and routing      |
| MongoDB        | NoSQL database                 |
| Mongoose       | ODM for MongoDB                |
| EJS            | Server-side HTML templating    |
| Multer         | File and image upload          |
| Bootstrap 5    | UI framework                   |
| Method-Override| PUT/DELETE from HTML forms     |
| Nodemon        | Live server reload (dev only)  |

---

## MongoDB Schema

```js
const bookSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  author:      { type: String, required: true },
  category:    { type: String, required: true },
  price:       { type: Number, required: true, min: 0 },
  quantity:    { type: Number, required: true, min: 0 },
  description: { type: String, default: '' },
  image:       { type: String, default: '' }
}, { timestamps: true });
```

---

## Getting Started

### Prerequisites
- Node.js v16 or higher
- MongoDB running locally on port 27017

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/bookstore.git
cd bookstore

# Install dependencies
npm install

# Start development server (with nodemon)
npm run dev

# Or start production server
npm start
```

Open your browser and visit: http://localhost:3000

---

## API Routes

| Method | Route        | Description        |
|--------|--------------|--------------------|
| GET    | /            | View all books     |
| GET    | /add         | Show add book form |
| POST   | /add         | Submit new book    |
| GET    | /edit/:id    | Show edit form     |
| POST   | /edit/:id    | Update book        |
| POST   | /delete/:id  | Delete book        |

---

## Example Output

```
Book Title:  Rich Dad Poor Dad
Author:      Robert Kiyosaki
Category:    Finance
Price:       Rs. 499
Quantity:    10
Image:       Uploaded Successfully
Status:      Book Added to Database Successfully
```

---

## Screenshots

Add screenshots of the following pages:
- All Books page (index)
- Add Book form
- Edit Book form

---

## Author

Built for academic submission - Book Store Management System project.
