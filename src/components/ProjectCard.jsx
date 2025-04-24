import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectCard = ({ projects, limit, isPortfolioHome }) => {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${isPortfolioHome ? "gap-4" : "gap-4"} mt-8 px-6 sm:px-0 gap-y-6`}>
      {displayedProjects.map((project) => (
        <Link
          key={project.id}
          to={`/portfolio/${project.slug}`}
          className="relative group overflow-hidden"
        >
          {/* Imagem */}
          <img
            src={project.image}
            alt={`Projeto ${project.name}`}
            className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* Sobreposição escura (mantida no desktop e mobile) */}
          <div className="absolute inset-0 bg-black opacity-30 sm:opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>

          {/* Nome do Projeto e Ícone */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white 
                          sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-lg font-semibold text-center block sm:hidden">
              {project.name}
            </h3>
            <div className="hidden sm:flex flex-col items-center">
              <h3 className="text-lg font-semibold text-center">{project.name}</h3>
              <FiArrowUpRight className="text-2xl mt-2" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectCard;
