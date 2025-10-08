import React, { useEffect, useState } from 'react';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
import drop from '../../assets/Drop.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);

 
  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
    setInstalledApps(storedApps);
  }, []);
 
  const handleUninstall = (appId, title) => {
    const updatedApps = installedApps.filter((app) => app.id !== appId);
    setInstalledApps(updatedApps);
    localStorage.setItem('installedApps', JSON.stringify(updatedApps));
    toast.error(`${title} uninstalled successfully!`, {
      position: 'top-right',
      autoClose: 3000,
    });
  };

   
  const handleSort = (order) => {
    let sortedApps = [...installedApps];
    if (order === 'high') {
      sortedApps.sort((a, b) => parseInt(b.size) - parseInt(a.size));
    } else if (order === 'low') {
      sortedApps.sort((a, b) => parseInt(a.size) - parseInt(b.size));
    }
    setInstalledApps(sortedApps);
  };

  return (
    <div>
      <div className="text-3xl font-bold flex justify-center items-center mt-8">
        <h1>Your Installed Apps</h1>
      </div>

      <div className="flex justify-center items-center text-gray-500 mt-3">
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>

       
      <div className="max-w-5xl mx-auto flex justify-between items-center mt-8 mb-5">
        <p className="font-bold">{installedApps.length} Apps installed</p>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-green-300 font-bold flex items-center gap-2"
          >
            Sort By Size <img src={drop} alt="dropdown" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box z-10 w-52 p-2 shadow-sm bg-green-100"
          >
            <li>
              <button onClick={() => handleSort('low')}>Low to High</button>
            </li>
            <li>
              <button onClick={() => handleSort('high')}>High to Low</button>
            </li>
          </ul>
        </div>
      </div>

       
      <div className="max-w-5xl mx-auto">
        {installedApps.length === 0 ? (
          <p className="text-center text-gray-500 mt-10 mb-10">
            No apps installed yet. Go to the Apps page and install one!
          </p>
        ) : (
          installedApps.map((app) => (
            <div
              key={app.id}
              className="flex justify-between items-center px-8 py-3 border border-gray-400 shadow-md rounded-xl mt-4 mb-3"
            >
              <div className="flex gap-5">
                <img
                  className="w-[70px] h-[70px] rounded-md"
                  src={app.image}
                  alt={app.title}
                />
                <div className="mt-3">
                  <p className="font-bold">{app.title}</p>
                  <div className="flex gap-4">
                    <div className="flex gap-2 text-green-900 font-bold">
                      <img
                        className="w-[20px] h-[20px]"
                        src={download}
                        alt="downloads"
                      />
                      <p>{app.downloads}</p>
                    </div>
                    <div className="flex gap-2 text-amber-500 font-bold">
                      <img
                        className="w-[20px] h-[20px]"
                        src={rating}
                        alt="rating"
                      />
                      <p>{app.ratingAvg}</p>
                    </div>
                    <p className="text-gray-500">{app.size} MB</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id, app.title)}
                className="btn bg-green-600 text-white font-semibold"
              >
                Uninstall
              </button>
            </div>
          ))
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default Installation;
