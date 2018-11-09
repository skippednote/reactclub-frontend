import React, { Component } from 'react';
import { Routes } from './routes';
import { Layout } from './components/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <Routes />
      </Layout>
    );
  }
}

export default App;
