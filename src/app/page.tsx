"use client";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const apps = ['Paint', 'Test', 'Portfolio'];

  // Function to open apps as routes
  const openApp = (app: string) => {
    // Navigate to the app's route
    router.push(`/${app.toLowerCase()}`);
  };

  return (
    <div className="h-full flex flex-col mainBgColor text-mainColor">
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
      </div>
    </div>
  );
}
