import { Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../context/userContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userContext = useContext(UserContext);
  const { jwt } = userContext;
  return (
    <Route
      {...rest}
      render={props =>
        jwt ? <Component {...props} /> : <Navigate to='/signin' />
      }
    />
  );
};
export default PrivateRoute;
