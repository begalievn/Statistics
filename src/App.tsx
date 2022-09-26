import { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import { appRoutesDefinition } from './views/routes';

export const App: FC = () => {
  const AppRoutes = useRoutes(appRoutesDefinition);
  return AppRoutes;
};
