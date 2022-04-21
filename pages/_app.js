import "../styles/globals.css";
import { wrapper } from "../store/store";
import { Provider, useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "react-toastify/dist/ReactToastify.min.css";

function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);

  return process.browser ? (
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <Component {...pageProps} />
    </PersistGate>
  ) : (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
