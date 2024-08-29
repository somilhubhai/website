// import About from "./components/About";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header"
import Home from "./components/Home";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-black to-gray-900 text-white scroll-smooth">
      <Header />
      <Home />
      {/* <About /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App