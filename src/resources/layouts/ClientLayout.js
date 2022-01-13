import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/client/Footer";
import NavBar from "../components/client/NavBar";
import TopBar from "../components/client/TopBar";

const ClientLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <TopBar />
      <NavBar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default ClientLayout;
