import { AxiosError } from "axios";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import RouteError from "./route-error";
import AxiosErrorComponent from "./axios-error-component";

function ErrorComponent() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return <RouteError error={error} />;
  }
  if (error instanceof AxiosError) {
    return <AxiosErrorComponent error={error} />;
  }
}

export default ErrorComponent;
