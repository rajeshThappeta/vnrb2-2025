import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      {/* header */}
      <Header />
      {/* placeholder for component */}
      <div style={{ minHeight: "90vh" }} className="container">
        <Outlet />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default RootLayout;
