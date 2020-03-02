import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Form from './Form.jsx';

const Login = () => {
  const formData = [
    {
      label: 'Email',
      autoFocus: true,
      type: 'string',
    },
    {
      label: 'Password',
      autoFocus: false,
      type: 'password',
    },
  ];

  const buttonData = {
    text: 'Login',
    variant: 'contained',
    color: 'primary',
  };

  return (
    <Fragment>
      <Form formData={formData} buttonData={buttonData} />
      <Link to="/register">
        Create an account
      </Link>
    </Fragment>
  );
};

export default Login;