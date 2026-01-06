import RoutingProvider from "./services/routing/routes.tsx";
import QueryProvider from "./services/query/query.tsx";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./features/auth/auth-provider.tsx";

function App() {
  return (
    <AuthProvider>
      <QueryProvider>
        <RoutingProvider />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          limit={5}
        />
      </QueryProvider>
    </AuthProvider>
  );
}

export default App;
