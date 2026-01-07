import RoutingProvider from "./services/routing/routes.tsx";
import QueryProvider from "./services/query/query.tsx";
import { AuthProvider } from "./features/auth/auth-provider.tsx";
import DarkmodeProvider from "./features/darkmode/useDarkmode.tsx";
import ToastContainer from "./services/toast/toast-container.tsx";
function App() {
  return (
    <AuthProvider>
      <QueryProvider>
        <DarkmodeProvider>
          <RoutingProvider />
          <ToastContainer />
        </DarkmodeProvider>
      </QueryProvider>
    </AuthProvider>
  );
}

export default App;
