// List of books with title, description, and image
const books = [
  {
    title: "JavaScript: The Good Parts",
    description: "An essential guide to learning JavaScript effectively.",
    image: "../images/book1.jpg",
  },
  {
    title: "HTML & CSS: Design and Build Websites",
    description: "Learn the basics of web design with HTML & CSS.",
    image: "../images/book2.jpg",
  },
  {
    title: "Learning Python",
    description: "A beginner's guide to programming with Python.",
    image: "../images/book3.jpeg",
  },
  {
    title: "The Pragmatic Programmer",
    description: "A classic book for software development best practices.",
    image: "../images/book4.jpeg",
  },
];

// Function to render the book cards dynamically
const renderBooks = () => {
  const booksContainer = document.getElementById("books-container");

  books.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    bookCard.innerHTML = `
      <img src="${book.image}" alt="${book.title}" />
      <h3>${book.title}</h3>
      <p>${book.description}</p>
    `;

    booksContainer.appendChild(bookCard);
  });
};

// Call the function to render books
renderBooks();
