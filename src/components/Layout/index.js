import React from 'react';
import { Header } from '../Header';

export function Layout({ children }) {
  return (
    <div
      style={{
        maxWidth: '40rem',
        margin: 'auto',
      }}
    >
      <Header />
      {children}
    </div>
  );
}
