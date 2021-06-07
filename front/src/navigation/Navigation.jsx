import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { MainLayout } from '../components/MainLayout/MainLayout';
import { ROUTER_PATHS } from '../constants/routerPaths.const';

import { VehiclesList, HistoryRecors, CurrentCar, Order } from '../pages';


export const Navigation = () => {
  return (<Router>
           <Switch>
             <MainLayout>
              <Route path={ROUTER_PATHS.index} component={VehiclesList} exact/>
              <Route path={ROUTER_PATHS.yourCar} component={CurrentCar} exact/>
              <Route path={ROUTER_PATHS.userHistory} component={HistoryRecors} exact/>
              <Route path={ROUTER_PATHS.order} component={Order} exact/>
            </MainLayout>
        </Switch>
        </Router>
        );
}