import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './components/NewsPage';

const App = () => {
  return (
    // '/:category?'에 '?'는 optional이라는 의미임.
    <Route path="/:category?" component={ NewsPage } />
  );
};

export default App;