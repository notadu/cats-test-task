import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Catalog from '../catalog/Catalog';
import Answers from '../answers/Answers';
import NotFound from '../not-found/NotFound';

const Main = () => (
  <main>
    <div className="container">
      <Switch>
        <Route exact path="/" component={Catalog} />
        <Route exact path="/answers" component={Answers} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </main>
);

export default Main;
