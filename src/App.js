import React from 'react';

import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { GlobalStyles, PageLayout, DashboardSideMenu } from './components';
import {
  DrawerProvider,
  ProductsFiltersProvider,
  ProductsProvider,
  DrawerRoot,
} from './providers';
import { routes } from './routes';
import { theme } from './theme';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthProvider, PrivateRoute } from './lib/auth';
import Admin from './pages/Dashboard/Admin';
import BuyerRegistration from './pages/BuyerRegistratio/BuyerRegistration';
AOS.init();

const routeMapper = (routes, isAuth = false) => {
  return routes.map(route => (
    <Route
      key={route.path}
      path={route.path}
      exact={true}
      render={props => {
        let Component = route.component;
        const Footer = route.footer;
        const AppBar = route.appBar;
        return (
          <>
            {route.title && (
              <Helmet>
                <meta charSet="utf-8" />
                <title>{route.title}</title>
              </Helmet>
            )}
            <PageLayout
              header={route.appBar ? <AppBar isAuth={isAuth} /> : null}
              main={<Component {...props} />}
              sidebar={isAuth ? <DashboardSideMenu /> : null}
              footer={route.footer ? <Footer /> : null}
            />
            <DrawerRoot />
          </>
        );
      }}
    />
  ));
};

function App() {
  return (
    <AuthProvider>
      <ProductsProvider>
        <ProductsFiltersProvider>
          <Router>
            <ChakraProvider className="prov" resetCSS theme={theme}>
              <GlobalStyles />
              <DrawerProvider>
                <Switch>
                  {routeMapper(routes)}

                  <PrivateRoute path="/admin" component={Admin} />
                  <PrivateRoute
                    path="/registration"
                    component={BuyerRegistration}
                  />
                  <Route path="*">
                    <h2>NOT FOUND</h2>
                  </Route>
                </Switch>
              </DrawerProvider>
            </ChakraProvider>
          </Router>
        </ProductsFiltersProvider>
      </ProductsProvider>
    </AuthProvider>
  );
}

export default App;
