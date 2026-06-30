import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import "./App.css";

const SignIn = lazy(() => import("./pages/SignIn"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Services = lazy(() => import("./pages/ServicesPage"));

function App() {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/services" element={<Services />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
