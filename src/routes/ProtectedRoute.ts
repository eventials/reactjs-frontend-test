import { Navigate } from "react-router-dom";

export type ProtectedRouteProps = {
    isAuthenticated: boolean;
    authenticationPath: string;
    protectedComponent: JSX.Element;
  };
  
export default function ProtectedRoute(
    { isAuthenticated, 
      authenticationPath, 
      protectedComponent
    }: ProtectedRouteProps ) {

    if(isAuthenticated) {
      return protectedComponent;
    } 
 
    return Navigate({to: authenticationPath});
};
  