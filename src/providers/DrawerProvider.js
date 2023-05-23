import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router";

import {
  UnAuthDrawer,
  AuthDrawer,
  CartDrawer,
  CustomerDrawer,
  CalenderEventDrawer,
} from "../components/Drawers";

export const drawers = {
  "": null,
  unAuthDrawer: UnAuthDrawer,
  authDrawer: AuthDrawer,
  cartDrawer: CartDrawer,
  customerDrawer: CustomerDrawer,
  calenderEventDrawer: CalenderEventDrawer,
};

const DrawerContext = createContext(null);

const DrawerProvider = ({ children }) => {
  const [drawer, setDrawer] = useState({ drawer: "", props: {} });

  const onOpenDrawer = (drawer, props = {}) => {
    setDrawer({ drawer, props });
  };

  const onCloseDrawer = () => {
    setDrawer({
      drawer: "",
      props: {},
    });
  };

  const location = useLocation();

  useEffect(() => {
    onCloseDrawer();
  }, [location]);

  const contextValue = { onOpenDrawer, onCloseDrawer, ...drawer };

  return (
    <DrawerContext.Provider value={contextValue}>
      {children}
    </DrawerContext.Provider>
  );
};

const DrawerRoot = () => (
  <DrawerContext.Consumer>
    {({ drawer, ...state }) => {
      const Component = drawer && drawers[drawer];

      if (Component) {
        return <Component {...state} />;
      }
    }}
  </DrawerContext.Consumer>
);

const useDrawer = () => {
  const drawerContext = useContext(DrawerContext);
  if (!drawerContext) {
    throw new Error("useDrawer must be within DrawerProvider");
  }
  return drawerContext;
};

export { DrawerContext, DrawerProvider, DrawerRoot, useDrawer };
