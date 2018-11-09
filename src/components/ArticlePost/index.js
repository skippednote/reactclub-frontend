import React from 'react';

export function ArticlePost({ article }) {
  return (
    <div>
      <h1>{article.data.attributes.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: article.data.attributes.body.value }}
      />
    </div>
  );
}
