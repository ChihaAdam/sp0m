import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "../../shared/components/ui/loading";
import { lazy, Suspense } from "react";
import {
  ProtectedRoute,
  ReverseProtectedRoute,
} from "../../features/auth/protected-route.tsx";

const Instagram = lazy(
  () => import("../../features/pages/instagram/instagram.tsx")
);
const Google = lazy(() => import("../../features/pages/google/google.tsx"));
const Login = lazy(() => import("../../features/auth/login/login"));
const MainPage = lazy(() => import("../../features/main-page/main-page"));
const Signup = lazy(() => import("../../features/auth/signup/signup"));
const Metrics = lazy(() => import("../../features/dashboard/metrics/metrics"));
const Settings = lazy(
  () => import("../../features/dashboard/settings/settings")
);
const Facebook = lazy(
  () => import("../../features/pages/facebook/facebook.tsx")
);
const ErrorComponent = lazy(
  () => import("../../features/errorHandling/error-component.tsx")
);
const PageVisualisation = lazy(
  () =>
    import("../../features/dashboard/pageVisualisation/page-visualisation.tsx")
);
const MainDashboardPage = lazy(
  () =>
    import("../../features/dashboard/mainDashboardPage/main-dashboard-page.tsx")
);
const PagesDashboard = lazy(
  () => import("../../features/dashboard/pagesDashboard/pages-dashboard.tsx")
);
const CreatePageMainMenu = lazy(
  () => import("../../features/dashboard/createPage/create-page-main-menu.tsx")
);
const Verification = lazy(
  () => import("../../features/auth/signup/verification.tsx")
);
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <MainPage />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<Loading />}>
        <ErrorComponent />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <ReverseProtectedRoute>
        <Suspense fallback={<Loading />}>
          <Login />
        </Suspense>
      </ReverseProtectedRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <ReverseProtectedRoute>
        <Suspense fallback={<Loading />}>
          <Signup />
        </Suspense>
      </ReverseProtectedRoute>
    ),
  },
  {
    path: "/verification",
    element: (
      <ReverseProtectedRoute>
        <Suspense fallback={<Loading />}>
          <Verification />
        </Suspense>
      </ReverseProtectedRoute>
    ),
  },
  {
    path: "/facebook/:id",
    element: (
      <Suspense fallback={<Loading />}>
        <Facebook />
      </Suspense>
    ),
  },
  {
    path: "/google/:id",
    element: (
      <Suspense fallback={<Loading />}>
        <Google />
      </Suspense>
    ),
  },
  {
    path: "/instagram/:id",
    element: (
      <Suspense fallback={<Loading />}>
        <Instagram />
      </Suspense>
    ),
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <Suspense fallback={<Loading />}>
          <MainDashboardPage />
        </Suspense>
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Loading />}>
              <PagesDashboard />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "pages/:id",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Loading />}>
              <PageVisualisation />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "create-page",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Loading />}>
              <CreatePageMainMenu />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "settings",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Loading />}>
              <Settings />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "metrics",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Loading />}>
              <Metrics />
            </Suspense>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const RoutingProvider = () => {
  return <RouterProvider router={router} />;
};
export default RoutingProvider;
