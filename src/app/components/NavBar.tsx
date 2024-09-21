"use client";
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [openTabs, setOpenTabs] = useState<string[]>(["Home"]);

  useEffect(() => {
    const currentApp = pathname === '/' ? 'Home' : pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);
    if (!openTabs.includes(currentApp)) {
      setOpenTabs([...openTabs, currentApp]);
    }
  }, [pathname]);

  const closeTab = (app: string) => {
    setOpenTabs(openTabs.filter((tab) => tab !== app)); //sets openTabs to be all the previous ones - the closed app

    if (pathname === `/${app.toLowerCase()}`) {
      router.push('/');
    } // if closing an app go to home
  };

  const navigateToApp = (app: string) => {
    if (app.toLowerCase() == 'home') {
        router.push(`/`);
    } else {
        router.push(`/${app.toLowerCase()}`);
    }
    
  };

  return (
    <div className="bgColor p-2 flex space-x-2 border-b border-gray-600">
      {openTabs.map((app) => (
        <div
          key={app}
          className="mainBgColor px-3 py-2 rounded flex items-center border border-gray-600 cursor-pointer transition-all duration-300 hover:scale-105"
          onClick={() => navigateToApp(app)}
        >
          {app}
          {app !== "Home" && (
            <button
              className="ml-2 text-red-600 hover:text-red-800"
              onClick={(e) => {
                e.stopPropagation();
                closeTab(app);
              }}
            >
              X
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
