import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.scss';

const Navigation = () => (
  <nav>
    <div className="nav">
      <Link to="/" className="nav--item">На главную</Link>
      <Link to="/answers" className="nav--item">Ответы на вопросы</Link>
    </div>
  </nav>
);

export default Navigation;
