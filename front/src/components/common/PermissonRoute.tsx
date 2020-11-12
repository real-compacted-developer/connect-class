import React from "react";
import { Route } from "react-router-dom";
import useUser from "../../hooks/useUser";

interface PermissionRouteProps {
  path: string | string[];
  exact?: boolean;
  success: React.ComponentType<any>;
  failure: React.ComponentType<any>;
}

const PermissionRoute: React.FC<PermissionRouteProps> = ({
  path,
  exact,
  success: Success,
  failure: Failure,
}) => {
  const { user } = useUser();

  const SuccessRoute = () => (
    <Route exact={exact} path={path} component={Success} />
  );
  const FailureRoute = () => (
    <Route exact={exact} path={path} component={Failure} />
  );

  return user !== undefined ? <SuccessRoute /> : <FailureRoute />;
};

export default PermissionRoute;
