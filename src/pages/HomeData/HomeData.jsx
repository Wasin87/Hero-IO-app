import React, { Suspense } from 'react';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
import { Link, useLoaderData } from 'react-router';

const HomeData = () => {
  const data = useLoaderData();

  return (
    <Suspense fallback={"Loading..."}>
      <div>
        <div className='text-3xl font-bold flex justify-center items-center mt-5'>
          <h1>Trending Apps</h1>
        </div>

        <div className='flex justify-center items-center text-gray-500 mt-3'>
          <p>Explore All Trending Apps on the Market developed by us</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-10 mb-5'>
          {data.map(({ id, image, title, downloads, ratingAvg }) => (
            <Link key={id} to={`/appDetails/${id}`}>
              <div className="border border-gray-200 rounded-md shadow-md p-4 w-[240px] h-[310px] transition-transform duration-300 hover:-translate-y-2">
                <img
                  className="w-[200px] h-[200px] flex justify-center items-center rounded-md"
                  src={image}
                  alt={title}
                />
                <p className="font-bold text-sm mt-3">{title}</p>

                <div className="flex justify-between mt-3">
                  <div className="flex gap-2 px-2 py-1 bg-green-200 rounded-2xl">
                    <img
                      className="w-[16px] h-[16px]"
                      src={download}
                      alt="Downloads icon"
                    />
                    <p className="text-green-500 font-bold text-sm">
                      {downloads}
                    </p>
                  </div>

                  <div className="flex gap-2 px-2 py-1 bg-orange-200 rounded-2xl">
                    <img
                      className="w-[16px] h-[16px]"
                      src={rating}
                      alt="Rating icon"
                    />
                    <p className="text-orange-500 font-bold text-sm">
                      {ratingAvg}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className='flex justify-center items-center'>
          <Link to="/apps">
            <button className='btn mb-8 mt-4 px-15 bg-gradient-to-r from-purple-800 to-purple-500 text-white border-none'>
              Show All
            </button>
          </Link>
        </div>
      </div>
    </Suspense>
  );
};

export default HomeData;
