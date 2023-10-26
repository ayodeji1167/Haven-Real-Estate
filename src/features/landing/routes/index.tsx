import { RouteObject } from 'react-router-dom';
import Home from './Home';
import AllProperties from './AllProperties';
import Agent from './Agent';
import Layout from '../components/Layout/Layout';
import { RouteError } from '@/components/Error/RouteError';

const LandingPageRouteList: Array<RouteObject> = [
  { index: true, element: <Home /> },
  { path: 'properties', element: <AllProperties /> },
  { path: 'agent', element: <Agent /> },
];

export const LandingPagesRoutes: RouteObject = {
  path: '',
  element: <Layout />,
  errorElement: <RouteError />,
  children: LandingPageRouteList,
};
