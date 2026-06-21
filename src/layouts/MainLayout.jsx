import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import ShadowMouse from "../components/ShadowMouse";
const MainLayout = () => {
  return (
    <>
    <ShadowMouse/>
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
    </>
  );
};

export default MainLayout;