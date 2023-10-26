import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RoutesList } from './RouteList';

const router = createBrowserRouter([...RoutesList]);
export default function AppRouter() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
