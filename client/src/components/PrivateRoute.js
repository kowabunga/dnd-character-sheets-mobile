import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../context/userContext';

const PrivateRoute = ({ children }) => {
  const userContext = useContext(UserContext);
  const { jwt } = userContext;
  return jwt ? children : <Navigate to='/signin' />;
};
export default PrivateRoute;
