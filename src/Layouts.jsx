import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-black to-gray-900 text-white scroll-smooth">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;