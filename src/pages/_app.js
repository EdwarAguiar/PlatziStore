import '../styles/globals.css'
import ProductList from "@containers/ProductList";
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';

function MyApp({ Component, pageProps }) {
const initialState = useInitialState();
  return (
    <AppContext.Provider value={useInitialState}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
