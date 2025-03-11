import React from "react";
import BookCard from "./components/BookCard"; // Ensure the path is correct

const App = () => {
  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: "$10",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: "$12",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      price: "$15",
    },
  ];

  return (
    <div>
      <h1>Digital Library</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default App;