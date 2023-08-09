import React, { useEffect } from "react";
import Navbar from "../Navbar";

const Layout = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <>
      <div className="min-h-full">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
