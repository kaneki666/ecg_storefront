import "../styles/globals.css";
import { wrapper } from "../store/store";
import { Provider, useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-toastify/dist/ReactToastify.min.css";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
  // return process.browser ? (
  //   <QueryClientProvider client={queryClient}>
  //     <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
  //       <Component {...pageProps} />
  //     </PersistGate>
  //   </QueryClientProvider>
  // ) : (
  //   <QueryClientProvider client={queryClient}>
  //     <PersistGate persistor={store}>
  //       <Component {...pageProps} />
  //     </PersistGate>
  //   </QueryClientProvider>
  // );
}

export default wrapper.withRedux(MyApp);
