import { useAuth } from '@/store/auth/useAuth';
import { Button } from 'antd';
import React from 'react';
import { Helmet } from 'react-helmet';

const SignIn = () => {
  const { onLogin } = useAuth();

  const handleLogin = () => {
    onLogin({
      token: 'asd',
      refreshToken: 'asdasd',
      expiredTime: 232,
    });
  };

  return (
    <>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1>Hello SignIn</h1>

      <Button onClick={handleLogin}>Sign In</Button>
    </>
  );
};

export default SignIn;
