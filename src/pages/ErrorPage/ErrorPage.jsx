import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assets/error-404.png';

const ErrorPage = () => {
  return (
    <div className='max-w-5xl mx-auto text-center mt-10 mb-10'>
      <img
        className='mx-auto w-[300px] md:w-[400px]'
        src={error}
        alt='Error Page'
      />
      <h1 className='font-bold text-2xl mt-5'>Oops, page not found!</h1>
      <p className='text-gray-500 mt-2'>
        The page you are looking for is not available.
      </p>
      <Link to='/'>
        <button className='btn mb-8 mt-5 px-10 bg-gradient-to-r from-purple-800 to-purple-500 text-white border-none rounded-md'>
          Go Back!
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
