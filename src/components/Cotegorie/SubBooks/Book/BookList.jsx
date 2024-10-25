import { Routes, Route, Link, useParams } from 'react-router-dom';
import Book from './Book';
import SubBookCard from '../SubBookCard';

export const BookList = ({filteredBooks}) => {
  

  return (
    <>
      {Array.isArray(filteredBooks) &&
        filteredBooks.map((book) => (
          <div key={book.id}>
            <Link to={`/${book.href}`}>
              <SubBookCard carddata={book} />
            </Link>
            
          </div>
        ))}
      
          </>
  );
};

