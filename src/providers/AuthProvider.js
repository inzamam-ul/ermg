import React, { useState, useEffect } from "react";
import { Flex, Spinner } from "@chakra-ui/react";

import Services, { ROUTES } from "../services";
import useAxios from "axios-hooks";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const [, logoutPost] = useAxios(
    {
      url: ROUTES.LOGOUT,
      method: "POST",
    },
    { manual: true }
  );

  useEffect(() => {
    Services.profile()
      .then((res) => {
        if (res.status === 200 && res.data) {
          const [user] = res.data;
          setUser(user);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (err.response.status === 403) {
          return window.location.assign("/login");
        }
      });
  }, []);

  const logout = async () => {
    const res = await logoutPost();
    if (res.status === 200) {
      return window.location.assign("/login");
    }
  };

  const value = {
    user,
    setUser,
    logout,
  };

  if (loading) {
    return (
      <Flex justify="center" align="center" h="100%">
        <Spinner size="xl" color="green.500" />
      </Flex>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const ctx = React.useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be within a UserProvider");
  }
  return ctx;
};

export { AuthContext, AuthProvider, useAuth };
