import React from 'react';
import Lottie from "lottie-react";
// import reader from '../assets/reader.json'
import reader from "../assets/reader.json";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div className="flex flex-col-reverse md:flex-row gap-4 justify-between items-center px-4 md:px-16 mt-8 md:mt-16">
        <div className="basis-1/2">
          <span className="bg-yellow-500 rounded-xl px-3 uppercase text-gray-600">
            on sale!!
          </span>
          <h1 className="text-2xl md:text-4xl font-bold my-4">
            A reader lives a thousand lives
            <span className="text-sky-500"> before he dies</span>
          </h1>
          <p className="my-4">
            Books are a uniquely portable magic. Books serve to show a man that
            those original thoughts of his aren’t very new after all. The man
            who does not read good books is no better than the man who can’t.
          </p>
          <Link to='/books'>
            <button className="bg-sky-500 py-2 px-4 rounded-lg font-bold text-white">
              Visit Store
            </button>
          </Link>
          <button className="font-bold ml-4">Learn More</button>
        </div>
        <div className="basis-1/2 -z-10">
          <Lottie animationData={reader}></Lottie>
        </div>
      </div>
    );
};

export default Home;