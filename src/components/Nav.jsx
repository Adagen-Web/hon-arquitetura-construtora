import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Ícones do menu
import logo from "../../public/logo-hon-arq-black.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white py-4 px-8 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="HON Arquitetura" className="h-16" />
          </Link>
        </div>

        {/* Ícone do Menu Mobile */}
        <button
          className="sm:hidden text-black text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Menu Desktop */}
        <nav className="hidden sm:block">
          <ul className="flex space-x-8">
            <li><Link to="/" className="text-black font-semibold hover:text-secondary">home</Link></li>
            <li><Link to="/sobre" className="text-black font-semibold hover:text-secondary">sobre</Link></li>
            <li><Link to="/portfolio" className="text-black font-semibold hover:text-secondary">portfólio</Link></li>
            <li><Link to="/contato" className="text-black font-semibold hover:text-secondary">contato</Link></li>
          </ul>
        </nav>
      </div>

      {/* Menu Mobile (não cobrindo toda a tela) */}
      {isOpen && (
        <nav className="sm:hidden fixed top-16 right-4 w-64 h-auto bg-black text-white z-50 rounded-lg shadow-lg py-6">
          <ul className="flex flex-col space-y-4 px-6">
            <li><Link to="/" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>home</Link></li>
            <li><Link to="/sobre" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>sobre</Link></li>
            <li><Link to="/portfolio" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>portfólio</Link></li>
            <li><Link to="/contato" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>contato</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Nav;
