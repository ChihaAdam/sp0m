import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./shared/components/ui/loading";
import { Suspense, lazy } from "react";
const MainPage = lazy(() => import("./features/main-page/main-page"));
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <MainPage />
      </Suspense>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
