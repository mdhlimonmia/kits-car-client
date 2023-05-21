import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';

const PrivetRouter = ({children}) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
  
    if (loading) {
      return <Loader />;
    }
    if (!user) {
      return (
        <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
      );
    }
  
    return children;
};

export default PrivetRouter;