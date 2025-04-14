import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './src/index.css';
import Header from './src/components/Header';
import Body from './src/components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './src/components/About';
import Contact from './src/components/Contact';
import RestaurantMenu from './src/components/RestaurantMenu';
import appStore from './src/utils/appStore';
import { Provider } from 'react-redux';
import Cart from './src/components/Cart';
import Help from './src/components/Help';

const Grocery = React.lazy(() => import('./src/components/Grocery'));

const AppLayout = () => {
  const [resetFlag, setResetFlag] = useState(false);

  const handleReset = () => {
    setResetFlag(true);
    setTimeout(() => setResetFlag(false), 100); // short delay to allow reset
  };

  return (
    <Provider store={appStore}>
      <div>
        <Header onLogoClick={handleReset} />
        <Outlet context={{ resetFlag }} />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />, // The Body handles the search functionality now.
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
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </React.Suspense>
        ),
      },
      {
        path: '/Cart',
        element: <Cart />,
      },
      {
        path: '/Help',
        element: <Help />,
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
