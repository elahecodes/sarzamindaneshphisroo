import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Blogs = lazy(() => import("./pages/Blogs"));

function App() {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;