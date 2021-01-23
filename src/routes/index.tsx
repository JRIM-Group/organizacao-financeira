import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import PoliticasDeInvestimento from '../pages/PoliticasDeInvestimento';

// Switch é para apresentar uma rota de cada vez

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/politicas-de-investimento" exact component={PoliticasDeInvestimento} />
  </Switch>
);

export default Routes;
