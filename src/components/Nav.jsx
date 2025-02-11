import { Link } from "react-router-dom";
import logo from "../../public/logo-hon-arq-black.png";

const Nav = () => {
  return (
    <header className="bg-white py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="HON Arquitetura" className="h-16" />
          </Link>
        </div>

        {/* Menu */}
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-black font-semibold hover:text-secondary">home</Link>
            </li>
            <li>
              <Link to="/sobre" className="text-black font-semibold hover:text-secondary">sobre</Link>
            </li>
            <li>
              <Link to="/portfolio" className="text-black font-semibold hover:text-secondary">portfólio</Link>
            </li>
            <li>
              <Link to="/contato" className="text-black font-semibold hover:text-secondary">contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
