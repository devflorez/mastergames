import "../styles/globals.scss";
import "semantic-ui-css/semantic.min.css";
import { UserProvider } from "../context/AuthContext";
function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
