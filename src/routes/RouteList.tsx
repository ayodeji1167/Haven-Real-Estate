import { RouteObject } from 'react-router-dom';
import BaseApp from './BaseApp';
import { RouteError } from '@/components/Error/RouteError';
import { LandingPagesRoutes } from '@/features/landing/routes';

export const RoutesList: RouteObject[] = [
  {
    path: '',
    element: <BaseApp />,
    errorElement: <RouteError />,
    children: [LandingPagesRoutes],
  },
];
