"use client"
import { useState } from 'react';

export default function Home() {
  const [openTabs, setOpenTabs] = useState([]);

  const apps = ['Paint', 'Test', 'Portfolio'];

  const openApp = (app) => {
    if (!openTabs.includes(app)) {
      setOpenTabs([...openTabs, app]);
    }
  };

  const closeTab = (app:any) => {
    setOpenTabs(openTabs.filter((tab) => tab !== app));
  };

  return (
    <div className="h-screen flex flex-col mainBgColor text-mainColor">
      {/* Navbar for tabs */}
      <div className="bgColor p-2 flex space-x-2 border-b border-gray-600">
        {openTabs.map((app) => (
          <div
            key={app}
            className="mainBgColor px-3 py-1 rounded flex items-center border border-gray-600"
          >
            {app}
            <button
              className="ml-2 text-red-600 hover:text-red-800"
              onClick={() => closeTab(app)}
            >
              X
            </button>
          </div>
        ))}
      </div>

      {/* Main content area */}
      <div className="flex-1 p-4">
        <h1 className="text-2xl mb-4 text-mainColor border-b border-gray-600">
          Flack's Playground
        </h1>
        <div className="space-x-4">
          {apps.map((app) => (
            <button
              key={app}
              className="px-4 py-2 bg-gray-700 text-gray-100 rounded hover:bg-gray-600 border border-gray-600"
              onClick={() => openApp(app)}
            >
              Open {app}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {openTabs.length > 0 ? (
            openTabs.map((app) => (
              <div key={app} className="mainBgColor p-4 rounded border border-gray-600 shadow-inner mb-4">
                <h2 className="text-mainColor">{app} Content</h2>
                <p className="text-mainColor">This is the content for {app}.</p>
              </div>
            ))
          ) : (
            <p className="text-mainColor">No apps open. Click to open one!</p>
          )}
        </div>
      </div>
    </div>
  );
}
