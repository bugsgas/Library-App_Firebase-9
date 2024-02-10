import BookList from '../components/BookList'
import BookForm from '../components/BookForm'
import { useCollection } from '../hooks/useCollection';

export default function Home() {
  const { documents: books } = useCollection('books',)

  return (
    <div className="App">
      <BookForm />
      {books && <BookList books={books} />}
    </div>
  );
}
