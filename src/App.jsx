import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ApiCallComponent from "./components/ApiCallComponent";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ApiCallComponent />
    </QueryClientProvider>
  );
}

export default App;
