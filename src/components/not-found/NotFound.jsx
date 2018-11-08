import React from 'react';

import Navigation from '../nav/Navigation';

import './NotFound.scss';

const NotFound = () => (
  <div className="not-found">
    <div className="not-found--text">
      <h1>404</h1>
      <p>Страница не найдена!</p>
    </div>
    <Navigation />
  </div>
);

export default NotFound;
