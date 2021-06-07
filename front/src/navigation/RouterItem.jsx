import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { ROUTER_PATHS } from '../constants/routerPaths.const';
import { getAuthState } from '../selectors/auth.selector';



const defaultState = { role: { name: '' }};

export const RouterItem = ({ children, allowedRoles, component, path, ...restProps }) => {
  const { user } = useSelector(getAuthState);

  const { role: { name }} = user || defaultState;

  if(allowedRoles && allowedRoles.indexOf(name) === -1) {
    return <Redirect to={ROUTER_PATHS.index}/>
  }

  return <Route path={path} component={component} exact {...restProps}/>;
}