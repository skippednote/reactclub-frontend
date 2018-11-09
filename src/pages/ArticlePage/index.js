import React, { Suspense } from 'react';
import { unstable_createResource as createResource } from 'react-cache';
import { Loading } from '../../components/Loading';
import { ArticlePost } from '../../components/ArticlePost';

const ArticleResource = createResource(id => {
  return fetch(
    `${process.env.REACT_APP_BASE_URL}/jsonapi/node/article/${id}`
  ).then(res => res.json());
});

function Article({ id }) {
  const article = ArticleResource.read(id);
  return <ArticlePost article={article} />;
}

function ArticlePage({ id }) {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Article id={id} />
      </Suspense>
    </div>
  );
}

export default ArticlePage;
