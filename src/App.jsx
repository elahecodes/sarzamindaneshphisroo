import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import ScrollToTop from "./components/scrollToTop";
import { ThemeProvider } from "./context/ThemeContext";
import DataOfBlogsContext from "./context/DataOfBlogsContext";
import DataOfPortfolioContext from "./context/DataOfPortfolioContext";
import Loading from "./assets/LoadingIcon/Spin@1x-1.0s-200px-200px.gif";
import Direction from "./components/direction";
import "./App.css";
const SignIn = lazy(() => import("./pages/SignIn"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Projectorder = lazy(() => import("./pages/ProjectOrder"));
const Contact = lazy(() => import("./pages/Contact"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));

function App() {
  Direction()
  return (
    <ThemeProvider>
      <DataOfPortfolioContext>
        <DataOfBlogsContext>
          <Suspense
            fallback={
              <div className="absolute top-24 lg:top-1/2 left-1/2 -translate-x-1/2 w-full transparent flex justify-center item-center">
                <img className="w-24 lg:w-32" src={Loading} alt="loading" />
              </div>
            }
          >
            <ScrollToTop />
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/projectorder" element={<Projectorder />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolioPage/:id" element={<PortfolioPage />} />
                <Route path="/blogPage/:id" element={<BlogPage />} />
              </Route>

              <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/signin" element={<SignIn />} />
              </Route>
            </Routes>
          </Suspense>
        </DataOfBlogsContext>
      </DataOfPortfolioContext>
    </ThemeProvider>
  );
}

export default App;
