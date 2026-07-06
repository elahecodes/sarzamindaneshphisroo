import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";
const SignIn = lazy(() => import("./pages/SignIn"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Services = lazy(() => import("./pages/ServicesPage"));
const Projectorder = lazy(() => import("./pages/ProjectOrder"));
const Contact = lazy(() => import("./pages/Contact"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<p>loading...</p>}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projectorder" element={<Projectorder />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
          </Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
