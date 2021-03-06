import React from 'react';
import rs, {
  RoutesLists
} from './map';

import { Switch, Route, HashRouter as Router, Redirect } from 'react-router-dom';
import { DEFAULT_TITLE } from '@constance/index';

const RenderRouters = (route: RoutesLists) => {
  const redirectPath = route.path ? route.path : rs.filter(item => item.name == route.name)[0].path || '/'

  return (
    route.redirect ? (
      <Redirect key={route.name} to={redirectPath}></Redirect>
    ) : (
      <Route path={route.path}
        key={route.name}
        render={props => (
          <route.component title={route.meta?.title || DEFAULT_TITLE} {...props} routes={route.children}/>
        )}></Route>
    )
  );
};

const RouteProvider = () => {
  return (
    <Router>
      <Switch>
        {
          rs.map((route: RoutesLists) => (
            RenderRouters(route)
          ))
        }
      </Switch>
    </Router>
  );
};

export default RouteProvider;
