import React from 'react';
import { Link } from '@reach/router';

export function ArticleList({ articles }) {
  return (
    <ul>
      {articles.data.map(article => (
        <li key={article.id}>
          <Link to={article.id}>{article.attributes.title}</Link>
        </li>
      ))}
    </ul>
  );
}
