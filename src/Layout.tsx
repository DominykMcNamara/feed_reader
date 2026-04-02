import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar links={["Feed", "Digest"]} />

      <div className="min-h-screen min-w-screen bg-white font-black">
        {children}
      </div>

      <Footer />
    </>
  );
}

export default Layout;
