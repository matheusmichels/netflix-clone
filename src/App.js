import React from 'react';
import { useSelector } from 'react-redux';

import createRouter from './routes';

export default function App() {
  const user = useSelector(state => state.auth.user);

  const Routes = createRouter(user);

  return <Routes />;
}
