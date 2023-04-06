import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';

const Book = ({ book }) => {
    let { title, subtitle, price, image } = book;
    return (
      <div className="relative">
        <Link to={`/book/${book.isbn13}`}>
          <div className="">
            <img src={image} alt="" />
          </div>
          <div className="absolute inset-0 text-white bg-black bg-opacity-50 px-4 py-2 flex flex-col opacity-0 hover:opacity-100 duration-700 rounded-xl">
            <h1 className="text-lg font-semibold mb-6">{title}</h1>
            <p>{subtitle}</p>
            <div className="mt-auto">
              <button>Price: {price}</button>
            </div>
          </div>
        </Link>
      </div>
    );
};

export default Book;