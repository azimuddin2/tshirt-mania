import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: 'home',
          element: <Home></Home>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'order',
          element: <Order></Order>
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
