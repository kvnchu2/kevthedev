import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/components/navbar.modules.css";
import "../styles/components/sidebyside.modules.css";
import "../styles/components/servicedescriptors.modules.css";
import "../styles/home.modules.css";
import "../styles/root.modules.css";
import "../styles/about.modules.css";
import "../styles/contact.modules.css";



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
