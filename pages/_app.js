import "../styles/globals.css";
import Navbar from "./components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar
        home="Home"
        about="About"
        priceList="Price List"
        contact="Contact"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
