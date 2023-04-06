import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from './Book';
import Loading from './Loading';

const Books = () => {
  let navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
    let {books} = useLoaderData()
    return (
      <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {books.map((singleBook) => (
          <Book book={singleBook} key={singleBook.isbn13}></Book>
        ))}
      </div>
    );
};

export default Books;