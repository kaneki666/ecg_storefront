import "../styles/globals.css";
import { wrapper } from "../store/store";
import { Provider, useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-toastify/dist/ReactToastify.min.css";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);

  return process.browser ? (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  ) : (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default wrapper.withRedux(MyApp);
