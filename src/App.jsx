import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import WhatsAppButton from "./components/WhatsAppButton";
import ContactPage from "./pages/ContactPage";
import MapSection from "./components/MapSection";
import AboutPage from "./pages/AboutPage";
import PortfolioPage, { projectsDataPortfolio } from "./pages/PortfolioPage";
import ProjectDetail from "./components/ProjectDetail";
import ProjectCard from "./components/ProjectCard";

function Layout() {
  const location = useLocation(); // Obtém a rota atual

  return (
    <>
      <Nav />
      {location.pathname === "/arquitetura/" && <Header />}

      <Routes>
        <Route path="/arquitetura/" element={<ProjectCard projects={projectsDataPortfolio} isPortfolioHome />} />
        <Route path="/arquitetura/sobre" element={<AboutPage />} />
        <Route path="/arquitetura/portfolio" element={<PortfolioPage />} />
        <Route path="/arquitetura/portfolio/:slug" element={<ProjectDetail />} />
        <Route path="/arquitetura/contato" element={<ContactPage />} />
      </Routes>
      {location.pathname === "/arquitetura/" && <ContactSection />}
      {location.pathname === "/arquitetura/contato" && <MapSection />}
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
