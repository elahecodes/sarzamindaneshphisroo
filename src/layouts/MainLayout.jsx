import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import ShadowMouse from "../components/ShadowMouse";
const MainLayout = () => {
  return (
    <>
      <ShadowMouse />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
