import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mt-2">Página não encontrada</h2>
      <p className="text-lg text-gray-600 mt-4">A página que você procura não existe ou foi removida.</p>

      <Link to="/" className="mt-6 px-6 py-3 bg-black text-white rounded-md text-lg hover:bg-gray-800 transition">
        Voltar para a Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
