import React, { lazy, Suspense, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './src/index.css';
import Header from './src/components/Header';
import Body from './src/components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './src/components/About';
import Contact from './src/components/Contact';
import RestaurantMenu from './src/components/RestaurantMenu';

const Grocery = lazy(() => import('./src/components/Grocery'));

const AppLayout = () => {
  const [resetFlag, setResetFlag] = useState(false);

  const handleReset = () => {
    setResetFlag(true);
    setTimeout(() => setResetFlag(false), 100); // short delay to allow reset
  };

  return (
    <div>
      <Header onLogoClick={handleReset} /> {/* ✅ Pass reset handler */}
      <Outlet context={{ resetFlag }} />   {/* ✅ Share with Body */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: '/restaurants/:resID',
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
