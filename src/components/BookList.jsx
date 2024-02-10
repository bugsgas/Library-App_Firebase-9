import React from 'react';

// styles
import styles from "./BookList.module.css";

export default function BookList({ books }) {

  return (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <li key={book.id} className={styles.book}>
            <div className={styles.title}>{book.title}</div>
            <div className="user">{book.name}</div>
          </li>
        ))}
      </ul>
    
    </div>
  );
}
