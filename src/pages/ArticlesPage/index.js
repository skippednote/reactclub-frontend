import React, { Suspense } from 'react';
import { unstable_createResource as createResource } from 'react-cache';
import { ArticleList } from '../../components/ArticleList';
import { Loading } from '../../components/Loading';

const ArticlesResource = createResource(() => {
  return fetch(`${process.env.REACT_APP_BASE_URL}/jsonapi/node/article`).then(
    res => res.json()
  );
});

function Articles() {
  const articles = ArticlesResource.read();
  return <ArticleList articles={articles} />;
}

function ArticlesPage() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Articles />
      </Suspense>
    </div>
  );
}

export default ArticlesPage;
