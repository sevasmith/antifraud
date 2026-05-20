import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export const ProtectedRoute = ({ children }) => {
  const currentUser = useSelector((state) => state.user.currentUser);

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
