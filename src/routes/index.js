import React, { Suspense, lazy } from 'react';
import { Router } from '@reach/router';
import { Loading } from '../components/Loading';

const HomePage = lazy(() => import('../pages/HomePage'));
const ArticlesPage = lazy(() => import('../pages/ArticlesPage'));
const ArticlePage = lazy(() => import('../pages/ArticlePage'));

export function Routes() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <HomePage path="/" />
        <ArticlesPage path="/articles" />
        <ArticlePage path="/articles/:id" />
      </Router>
    </Suspense>
  );
}
