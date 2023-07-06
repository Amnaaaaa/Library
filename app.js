const express = require('express')
const bodyParser = require('body-parser')
const books = [{
        bookName: "Rudest Book Ever",
        bookAuthor: "Shwetabh Gangwar",
        bookPages: 200,
        bookPrice: 240,
        bookState: "Available"
    },
    {
        bookName: "Do Epic Shit",
        bookAuthor: "Ankur Wariko",
        bookPages: 200,
        bookPrice: 240,
        bookState: "Available"
    }
]
  
const app = express()
  
app.set('view engine', 'ejs')
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
  
app.get("/", function (req, res) {
    res.render("home", {
        data: books
    })
})
  
app.post("/", (req, res) => {
    const inputBookName = req.body.bookName
    const inputBookAuthor = req.body.bookAuthor
    const inputBookPages = req.body.bookPages
    const inputBookPrice = req.body.bookPrice
  
    books.push({
        bookName: inputBookName,
        bookAuthor: inputBookAuthor,
        bookPages: inputBookPages,
        bookPrice: inputBookPrice,
        bookState: "Available"
    })
  
    res.render("home", {
        data: books
    })
})
  
app.post('/issue', (req, res) => {
    var requestedBookName = req.body.bookName;
    books.forEach(book => {
        if (book.bookName == requestedBookName) {
            book.bookState = "Issued";
        }
    })
    res.render("home", {
        data: books
    })
})
  
app.post('/return', (req, res) => {
    var requestedBookName = req.body.bookName;
    books.forEach(book => {
        if (book.bookName == requestedBookName) {
            book.bookState = "Available";
        }
    })
    res.render("home", {
        data: books
    })
})
  
app.post('/delete', (req, res) => {
    var requestedBookName = req.body.bookName;
    var j = 0;
    books.forEach(book => {
        j = j + 1;
        if (book.bookName == requestedBookName) {
            books.splice((j - 1), 1)
        }
    })
    res.render("home", {
        data: books
    })
})
  
app.listen(3000, (req, res) => {
    console.log("App is running on port 3000")



})


//retrieving based on isbn 


const express = require('express');
const app1 = express();

// Sample array of available books
const books2 = [
  { isbn: '123456789', title: 'Book 1', author: 'Author 1' },
  { isbn: '987654321', title: 'Book 2', author: 'Author 2' },
  { isbn: '456789123', title: 'Book 3', author: 'Author 3' },
  // Add more books as needed
];

app.get('/books/:isbn', (req, res) => {
  const { isbn } = req.params;
  const foundBooks = books.filter(book => book.isbn === isbn);

  res.json(foundBooks);
});

app.listen(3000, () => {
  console.log('app is running on port 3000');
});



//get all books by author

const express = require('express');
const app3 = express();

// Sample array of available books
const books3 = [
  { isbn: '123456789', title: 'Book 1', author: 'Author 1' },
  { isbn: '987654321', title: 'Book 2', author: 'Author 2' },
  { isbn: '456789123', title: 'Book 3', author: 'Author 1' },
  // Add more books as needed
];

app.get('/books/author/:author', (req, res) => {
  const { author } = req.params;
  const foundBooks = books.filter(book => book.author === author);

  res.json(foundBooks);
});

app.listen(3000, () => {
  console.log('Library management system is running on port 3000');
});




const express = require('express');
const app4 = express();


const books4 = [
  { isbn: '123456789', title: 'Book 1', author: 'Author 1' },
  { isbn: '987654321', title: 'Book 2', author: 'Author 2' },
  { isbn: '456789123', title: 'Book 1', author: 'Author 3' },
  // Add more books as needed
];

app.get('/books/title/:title', (req, res) => {
  const { title } = req.params;
  const foundBooks = books.filter(book => book.title === title);

  res.json(foundBooks);
});

app.listen(3000, () => {
  console.log('Library management system is running on port 3000');
});


//getting a book review


const express = require('express');
const app5 = express();


const books5 = [
  { isbn: '123456789', title: 'Book 1', author: 'Author 1', review: 'This book is great!' },
  { isbn: '987654321', title: 'Book 2', author: 'Author 2', review: 'Highly recommended!' },
  { isbn: '456789123', title: 'Book 3', author: 'Author 1', review: 'A must-read!' },
  // Add more books as needed
];

app.get('/books/review/:isbn', (req, res) => {
  const { isbn } = req.params;
  const foundBook = books.find(book => book.isbn === isbn);

  if (foundBook) {
    res.json({ review: foundBook.review });
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

app.listen(3000, () => {
  console.log('Library management system is running on port 3000');
});



const express = require('express');
const app6 = express();

// Sample array of registered users
let users = [];

// Middleware to parse JSON requests
app.use(express.json());

app.post('/users/register', (req, res) => {
  const { name, email, password } = req.body;

  // Check if user with the same email already exists
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(409).json({ error: 'User already exists' });
  }

  // Create a new user object
  const newUser = { name, email, password };

  // Add the new user to the array of users
  users.push(newUser);

  res.status(201).json({ message: 'User registered successfully' });
});

app.listen(3000, () => {
  console.log('Library management system is running on port 3000');
});


const express = require('express');
const app7 = express();


// Middleware to parse JSON requests
app.use(express.json());

app.post('/users/register', (req, res) => {
 
});

app.post('/users/login', (req, res) => {
  const { email, password } = req.body;

  // Find the user with the provided email
  const user = users.find(user => user.email === email);

  // Check if the user exists and the password matches
  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  res.json({ message: 'Login successful' });
});

app.listen(3000, () => {
  console.log('Library management system is running on port 3000');
});



const express = require('express');
const app = express();

// Sample array of available books
let books = [
  { isbn: '123456789', title: 'Book 1', author: 'Author 1' },
  { isbn: '987654321', title: 'Book 2', author: 'Author 2' },
  { isbn: '456789123', title: 'Book 3', author: 'Author 1' },
  // Add more books as needed
];

// Middleware to parse JSON requests
app.use(express.json());

app.get('/books', (req, res) => {
  res.json(books);
});

app.post('/books', (req, res) => {
  const { isbn, title, author } = req.body;

  // Check if book with the same ISBN already exists
  const existingBook = books.find(book => book.isbn === isbn);
  if (existingBook) {
    return res.status(409).json({ error: 'Book already exists' });
  }

  // Create a new book object
  const newBook = { isbn, title, author };

  // Add the new book to the array of books
  books.push(newBook);

  res.status(201).json({ message: 'Book added successfully' });
});

app.put('/books/:isbn', (req, res) => {
  const { isbn } = req.params;
  const { title, author } = req.body;

  // Find the book with the provided ISBN
  const book = books.find(book => book.isbn === isbn);

  // Check if the book exists
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  // Update the book's title and/or author
  book.title = title || book.title;
  book.author = author || book.author;

  res.json({ message: 'Book updated successfully' });
});

app.listen(3000, () => {
  console.log('Library management system is running on port 3000');
});



//delete books
const express = require('express');
const app = express();

// Sample array of available books
let books = [
  { isbn: '123456789', title: 'Book 1', author: 'Author 1' },
  { isbn: '987654321', title: 'Book 2', author: 'Author 2' },
  { isbn: '456789123', title: 'Book 3', author: 'Author 1' },
  // Add more books as needed
];

app.get('/books', (req, res) => {
  res.json(books);
});

app.post('/books', (req, res) => {
  // Add book logic
  // ...
});

app.put('/books/:isbn', (req, res) => {
  // Edit book logic
  // ...
});

app.delete('/books/:isbn', (req, res) => {
  const { isbn } = req.params;

  // Find the index of the book with the provided ISBN
  const bookIndex = books.findIndex(book => book.isbn === isbn);

  // Check if the book exists
  if (bookIndex === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }

  // Remove the book from the array
  books.splice(bookIndex, 1);

  res.json({ message: 'Book deleted successfully' });
});

app.listen(3000, () => {
  console.log('Library management system is running on port 3000');
});
