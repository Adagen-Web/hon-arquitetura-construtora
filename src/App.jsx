import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <Router>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<h1 className="text-center mt-10">Portfolio aqui</h1>} />
      </Routes>
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;
