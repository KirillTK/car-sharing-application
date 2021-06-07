import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { MainLayout } from '../components/MainLayout/MainLayout';
import { ROUTER_PATHS } from '../constants/routerPaths.const';

import { VehiclesList, HistoryRecors, CurrentCar, Order } from '../pages';
import { AdminPanel } from '../pages/AdminPanel/AdminPanel';

import { RouterItem } from './RouterItem';


export const Navigation = () => {
  return (<Router>
           <Switch>
             <MainLayout>
              <Route path={ROUTER_PATHS.index} component={VehiclesList} exact/>
              <RouterItem path={ROUTER_PATHS.yourCar} component={CurrentCar} exact />
              <Route path={ROUTER_PATHS.userHistory} component={HistoryRecors} exact/>
              <Route path={ROUTER_PATHS.order} component={Order} exact/>
              <RouterItem path={ROUTER_PATHS.admin} component={AdminPanel} exact allowedRoles={["admin"]} />
            </MainLayout>
        </Switch>
        </Router>
  );
}