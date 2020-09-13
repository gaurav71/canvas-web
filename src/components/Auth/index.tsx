import { Layout } from 'antd';
import React from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { url } from '../../config';

import { Container, LoginBox } from './styled'

interface AuthProps {}

export const Auth: React.FC<AuthProps> = ({}) => {

  return (
    <Container> 
      <LoginBox>
        <a href={`${url}/auth/google`}>
          <GoogleLoginButton  />
        </a>
      </LoginBox>
    </Container>
  )
}

export default Auth