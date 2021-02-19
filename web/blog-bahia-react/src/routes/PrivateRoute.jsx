import React, { useContext } from 'react';
import { BlogContext } from '../Context';
import { Route, Redirect } from 'react-router-dom';
import validateUser from '../auth/validateUser';

function PrivateRoute({ component: Component, ...rest }) {
  const { validate, setValidate } = useContext(BlogContext);
  console.log(validate)
  validateUser(setValidate);
  return (
    <Route
      {...rest}
      render={ props => 
        validate ? (
          <Component { ...props } />
        ) : (
          // <Redirect to ={{ pathname: "/", state: { from: props.location } }} />
          <div>Acesso não permitido</div>
        )
      }
    />
  );
}

export default PrivateRoute;
