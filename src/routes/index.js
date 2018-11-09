import React, { Suspense, lazy } from 'react';
import { Router } from '@reach/router';
import { Loading } from '../components/Loading';

const HomePage = lazy(() => import('../pages/HomePage'));
const ArticlesPage = lazy(() => import('../pages/ArticlesPage'));

export function Routes() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <HomePage path="/" />
        <ArticlesPage path="/articles" />
      </Router>
    </Suspense>
  );
}
