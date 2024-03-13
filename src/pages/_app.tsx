// Import necessary modules
import "@/styles/globals.css";
import "@/styles/webCSS.css";

import type { AppProps } from "next/app";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Head from "next/head";
// Define the App component
export default function App({ Component, pageProps }: AppProps) {




  return (<>

  <Head>
    <title>Price Tracker</title>
    <meta name="description" content="Track prices effortlessly, save money smartly, with real-time notifications " />
  </Head>
    <div>
      <Navbar/> {/* Include the NavBar component */}
      <Component {...pageProps} /> {/* Render the page content */}

      {/* <div className="mt-72">
      <Footer/>
      </div> */}
    </div>
  </>
    
  );
}
