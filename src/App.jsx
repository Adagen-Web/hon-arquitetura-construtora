import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import WhatsAppButton from "./components/WhatsAppButton";
import ContactPage from "./pages/ContactPage";
import MapSection from "./components/MapSection";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectDetail from "./components/ProjectDetail";

function Layout() {
  const location = useLocation(); // Obtém a rota atual

  return (
    <>
      <Nav />
      {location.pathname === "/" && <Header />}

      <Routes>
        <Route path="/" element={<h1 className="text-center mt-10">Portfolio aqui</h1>} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:slug" element={<ProjectDetail />} />
        <Route path="/contato" element={<ContactPage />} />
      </Routes>
      {location.pathname === "/" && <ContactSection />}
      {location.pathname === "/contato" && <MapSection />}
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
