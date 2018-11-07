import React from 'react';

export function ArticleList({ articles }) {
  return (
    <ul>
      {articles.data.map(article => (
        <li key={article.id}>{article.attributes.title}</li>
      ))}
    </ul>
  );
}
