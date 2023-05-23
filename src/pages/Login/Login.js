import React from 'react';

import './login.css';
import { Box } from '@chakra-ui/react';
import LoginForm from './Component/LoginForm';
import loginBg from './login-assets/flat-lay-cloth (1).png';
import { useAuth } from '../../lib/auth';
import { Redirect, Switch } from 'react-router-dom';

const Login = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
      <Box className="nunito">
        <Box>
          <Box mb={[0, 8, 0]}>
            <Box h="auto" color="white" align="center">
              <img className="loginBg" src={loginBg} alt="" />
              <LoginForm />
              <Switch>{user && <Redirect to="/admin/dashboard" />}</Switch>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
