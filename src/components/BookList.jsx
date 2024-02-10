import React from 'react';
import { useDeleteDoc } from '../hooks/useDeleteDoc'

export default function BookList({ books }) {
  const { deleteDocument, loading, error } = useDeleteDoc();

  const handleClick = async (id) => {
    await deleteDocument('books', id);
  };

  return (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <button 
              onClick={() => handleClick(book.id)} 
              style={{ marginRight: '10px' }}>
              X
            </button>
            {book.title}
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}
