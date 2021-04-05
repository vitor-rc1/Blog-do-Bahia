import React, { useContext } from 'react';
import NotAuthorized from '../components/NotAuthorized';
import { BlogContext } from '../Context';
import { Route } from 'react-router-dom';
import validateUser from '../auth/validateUser';

function PrivateRoute({ component: Component, ...rest }) {
  const { validate, setValidate } = useContext(BlogContext);
  console.log(validate)
  validateUser(setValidate);
  return (
    <Route
      {...rest}
      render={ props => 
        validate ? <Component { ...props } /> : <NotAuthorized />
      }
    />
  );
}

export default PrivateRoute;
