import Navbar from "./Navbar";
import Head from "next/head";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>SuperHero App</title>
      </Head>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
