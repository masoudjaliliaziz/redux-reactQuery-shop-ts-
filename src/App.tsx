import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./page/Home";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./../store";
import Cart from "./page/Cart";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider store={store}>
        <Home />
        <Cart />
      </Provider>
      <Toaster
        position="top-center"
        gutter={3}
        containerStyle={{
          margin: "8px",
        }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontFamily: "sans-serif",
            fontSize: "18px",
            fontWeight: "bolder",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
