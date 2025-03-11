// write the book component code here
import React from 'react';

const BookCard = ({ title, author, year }) => {
  return (
    <div className="border p-4 m-2 rounded shadow-md bg-white">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-600">Author: {author}</p>
      <p className="text-gray-500">Published: {year}</p>
    </div>
  );
};

export default BookCard;