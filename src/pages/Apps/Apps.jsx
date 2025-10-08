import React, { useState } from 'react';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';

const Apps = () => {
  const data = useLoaderData();
  const [searchText, setSearchText] = useState('');

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleReset = () => setSearchText('');

  return (
    <div>
      <div className="text-3xl font-bold flex justify-center items-center mt-8">
        <h1>Our All Applications</h1>
      </div>

      <div className="flex justify-center items-center text-gray-500 mt-3">
        <p>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>

      <div className="max-w-5xl mx-auto flex justify-between mt-8">
        <p className="font-bold">({filteredData.length}) Apps Found</p>

        <label className="input border-2 border-gray-500 hover:border-purple-600 w-[200px] flex items-center gap-2 px-2 rounded-md">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search"
            className="w-full outline-none"
          />
        </label>
      </div>

      {filteredData.length === 0 ? (
        <div className="text-center mt-10 mb-10">
          <p className="text-gray-500 text-2xl font-bold mb-4">App not found</p>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gradient-to-r from-purple-800 to-purple-500 text-white border-none rounded-md transition font-semibold"
          >
            Show All
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-3 mb-5">
          {filteredData.map(({ id, image, title, downloads, ratingAvg }) => (
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
      )}
    </div>
  );
};

export default Apps;
