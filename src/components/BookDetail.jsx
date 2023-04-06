import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "./Loading";

const BookDetail = () => {
  let navigation = useNavigation()
  if (navigation.state === "loading") {
    return <Loading></Loading>
  }
  let bookData = useLoaderData();
  let { image, authors, publisher, rating, year, title, desc, price } =
    bookData;
  let [fold, setFold] = useState(true);

  return (
    <div className="w-10/12 mx-auto flex flex-col md:flex-row justify-between">
      <div className="basis-1/2">
        <img className="object-cover w-full" src={image} alt="" />
      </div>
      <div className="basis-1/2 mt-16 p-2">
        <span className="bg-yellow-500 rounded-xl px-3 uppercase text-gray-600">
          Brand New
        </span>
        <h1 className="text-3xl font-bold my-4">{title}</h1>
        <div className="my-4">
          <p>Author: {authors}</p>
          <p>Publisher: {publisher}</p>
          <p>Year: {year}</p>
          <p>Rating: {rating}</p>
        </div>
        {fold ? (
          <p className="text-gray-700">
            {desc.slice(0,120)}{" "}
            <span
              className="cursor-pointer text-sky-500"
              onClick={() => setFold(!fold)}
            >
              Read More..
            </span>
          </p>
        ) : (
          <p>
            {desc}{" "}
            <span
              className="cursor-pointer text-sky-500"
              onClick={() => setFold(!fold)}
            >
              Read Less
            </span>
          </p>
        )}
        <div className="flex items-center gap-6 my-4">
          <button className="bg-sky-500 py-2 px-4 rounded-lg font-bold text-white">
            Buy now
          </button>
          <p>Price: {price}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
