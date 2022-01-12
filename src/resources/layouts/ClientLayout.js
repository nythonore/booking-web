import { Outlet } from "react-router-dom";
import Footer from "../components/client/Footer";
import NavBar from "../components/client/NavBar";
import TopBar from "../components/client/TopBar";

const ClientLayout = () => {
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
