import React, { useState, useEffect, Suspense } from 'react';
import { useLoaderData, useParams, Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
import review from '../../assets/icon-review.png';
import appFound from '../../assets/App-Error.png';

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id, 10);
  const data = useLoaderData();

 
  const singleApp = Array.isArray(data) ? data.find((app) => app.id === appId) : null;
  const [installed, setInstalled] = useState(false);

 
  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
    const isInstalled = storedApps.some((app) => app.id === appId);
    setInstalled(isInstalled);
  }, [appId]);

 
  return (
    <Suspense fallback={"Loading..."}>
      {!singleApp ? (
        <div className="max-w-5xl mx-auto text-center mt-10 mb-10">
          <img className="mx-auto w-[300px] md:w-[400px]" src={appFound} alt="App Not Found" />
          <h1 className="font-bold text-2xl mt-5">OOPS!! APP NOT FOUND</h1>
          <p className="text-gray-500 mt-2">
            The app you are requesting is not found on our system. Please try another app.
          </p>
          <Link to="/">
            <button className="btn mb-8 mt-5 px-10 bg-gradient-to-r from-purple-800 to-purple-500 text-white border-none rounded-md">
              Go Back!
            </button>
          </Link>
        </div>
      ) : (
        <div className="max-w-5xl mx-auto mt-8 mb-8 px-4">
          <div className="flex gap-10 py-6">
            <div>
              <img className="w-[200px] h-[200px] rounded-xl" src={singleApp.image} alt={singleApp.title} />
            </div>

            <div>
              <div className="mb-4">
                <h1 className="font-bold text-xl">{singleApp.title}</h1>
                <span className="text-gray-500">Developed by </span>
                <span className="text-purple-500 font-bold">{singleApp.companyName}</span>
              </div>

              <hr />
              <br />

              <div className="flex justify-between gap-10">
                <div>
                  <img className="w-[25px] h-[25px]" src={download} alt="" />
                  <p className="text-gray-500">Downloads</p>
                  <h1 className="font-bold text-xl">{singleApp.downloads}</h1>
                </div>
                <div>
                  <img className="w-[25px] h-[25px]" src={rating} alt="" />
                  <p className="text-gray-500">Average Ratings</p>
                  <h1 className="font-bold text-xl">{singleApp.ratingAvg}</h1>
                </div>
                <div>
                  <img className="w-[25px] h-[25px]" src={review} alt="" />
                  <p className="text-gray-500">Total Reviews</p>
                  <h1 className="font-bold text-xl">{singleApp.reviews}</h1>
                </div>
              </div>

              <button
                onClick={() => {
                  const storedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
                  const isAlreadyInstalled = storedApps.some((app) => app.id === appId);

                  if (!isAlreadyInstalled) {
                    storedApps.push(singleApp);
                    localStorage.setItem('installedApps', JSON.stringify(storedApps));
                    setInstalled(true);
                    toast.success(`${singleApp.title} installed successfully! 🚀`, {
                      position: 'top-right',
                      autoClose: 3000,
                    });
                  } else {
                    toast.info(`${singleApp.title} is already installed!`, {
                      position: 'top-right',
                      autoClose: 2000,
                    });
                  }
                }}
                className={`btn font-semibold mt-3 px-4 py-2 rounded-md bg-green-500 text-white ${
                  installed ? 'cursor-not-allowed' : ''
                }`}
              >
                {installed ? 'Installed' : `Install Now (${singleApp.size} MB)`}
              </button>
            </div>
          </div>

          <hr />

          <h1 className="font-bold text-lg mt-4 mb-5">Ratings</h1>

          <div className="mb-4 flex justify-center">
            <BarChart
              width={600}
              height={300}
              data={singleApp.ratings}
              layout="vertical"
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
            <p className="text-gray-500">{singleApp.description}</p>
          </div>

          <ToastContainer />
        </div>
      )}
    </Suspense>
  );
};

export default AppDetails;
