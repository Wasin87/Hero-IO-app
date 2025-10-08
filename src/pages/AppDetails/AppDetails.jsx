import React, { useState } from 'react';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
import review from '../../assets/icon-review.png';
import { useLoaderData, useParams } from 'react-router';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();

  const singleApp = data.find((app) => app.id === appId);

  const [installed, setInstalled] = useState(false);

  if (!singleApp) {
    return (
      <div className="text-center mt-10 text-xl text-gray-500">
        App not found
      </div>
    );
  }

  const { image, title, downloads, ratingAvg, reviews, description, size, ratings } =
    singleApp;

  return (
    <div className="max-w-5xl mx-auto mt-8 mb-8">
      <div className="flex gap-10 py-6">
        <div>
          <img className="w-[200px] h-[200px] rounded-xl" src={image} alt={title} />
        </div>

        <div>
          <div className="mb-4">
            <h1 className="font-bold text-xl">{title}</h1>
            <span className="text-gray-500">Developed by </span>
            <span className="text-purple-500 font-bold">productive.io</span>
          </div>

          <hr />
          <br />

          <div className="flex justify-between gap-10">
            <div>
              <img className="w-[25px] h-[25px]" src={download} alt="" />
              <p className="text-gray-500">Downloads</p>
              <h1 className="font-bold text-xl">{downloads}</h1>
            </div>
            <div>
              <img className="w-[25px] h-[25px]" src={rating} alt="" />
              <p className="text-gray-500">Average Ratings</p>
              <h1 className="font-bold text-xl">{ratingAvg}</h1>
            </div>
            <div>
              <img className="w-[25px] h-[25px]" src={review} alt="" />
              <p className="text-gray-500">Total Reviews</p>
              <h1 className="font-bold text-xl">{reviews}</h1>
            </div>
          </div>

          <button
            onClick={() => setInstalled(true)}
            disabled={installed}
            className={`btn font-semibold mt-3 px-4 py-2 rounded-md bg-green-500 text-white ${
              installed ? 'cursor-not-allowed' : ''
            }`}
          >
            {installed ? 'Installed' : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>

      <hr />

      <h1 className="font-bold text-lg mt-4 mb-5">Ratings</h1>

      <div className="mb-4 flex justify-center">
        <BarChart
          width={600}
          height={300}
          data={ratings}  // single app rating data
          layout="vertical" // optional: use vertical if you want horizontal bars
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#FF8811" />
        </BarChart>
      </div>

      <hr />

      <div>
        <h1 className="font-bold text-lg mt-4 mb-3">Description</h1>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
