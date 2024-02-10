import React from 'react';
import { useDeleteDoc } from '../hooks/useDeleteDoc'
import { useAuthContext } from '../hooks/useAuthContext'
import { useCollection } from '../hooks/useCollection';

//pages
import BookForm from './BookForm';

//styles
import styles from './UserBook.module.css'

export default function UserBook() {
  const { deleteDocument, loading, error } = useDeleteDoc();
  const { user } = useAuthContext()
  const { documents: books } = useCollection(
    'books',
    ['uid', '==', user.uid])

  const handleClick = async (id) => {
    await deleteDocument('books', id);
  };

  // Add a conditional check for null books array
  if (books === null) {
    return ;
  }

  return (
    <div className="book-list">
      <BookForm />
      <ul>
        {books.map((book) => (
          <li key={book.id} >
            <button 
              onClick={() => handleClick(book.id)} className={styles.button}>
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
