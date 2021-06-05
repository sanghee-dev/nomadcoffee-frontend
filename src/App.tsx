import AppRouter from "router/AppRouter";
import ContextProvider from "context/context";

function App() {
  return (
    <ContextProvider>
      <AppRouter />
    </ContextProvider>
  );
}

export default App;
