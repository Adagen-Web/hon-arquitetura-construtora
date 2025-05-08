import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectCard = ({ projects, limit, isPortfolioHome }) => {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ${isPortfolioHome ? "gap-4" : "gap-4"
        } mt-8 px-6 sm:px-0 gap-y-6`}
    >
      {displayedProjects.map((project) => (
        <Link
          key={project.id}
          to={`/projeto/${project.slug}`}
          className="relative group overflow-hidden"
        >
          {/* Imagem com grayscale só no sm+ */}
          <img
            src={project.image}
            alt={`Projeto ${project.name}`}
            className="w-full h-[500px] object-cover sm:filter sm:grayscale sm:group-hover:grayscale-0 sm:transition-all sm:duration-500 sm:ease-in-out"
          />

          {/* Sobreposição escura visível só no sm+ */}
          <div className="absolute inset-0 bg-black opacity-0 sm:opacity-35 sm:group-hover:opacity-0 transition-opacity duration-300"></div>

          {/* Conteúdo central */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white transition-opacity duration-300">
            {/* Nome visível no mobile */}
            <h3 className="text-lg font-bold text-center block sm:hidden">
              {project.name}
            </h3>

            {/* Nome + ícone no hover apenas no desktop */}
            <div className="hidden sm:flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-semibold text-white text-center">{project.name}</h3>
              <FiArrowUpRight className="text-2xl mt-2" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectCard;
