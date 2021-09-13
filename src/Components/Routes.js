import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import MushroomList from '../Containers/MushroomList';
import MushroomDet from '../Containers/MushroomDet';

const Routes = () => (
  <>
    <Navbar />
    <Switch>
      <Route path="/" component={MushroomList} exact />
      <Route path="/:id" exact component={MushroomDet} />
      <Route component={Error} />
    </Switch>
  </>
);

export default Routes;
