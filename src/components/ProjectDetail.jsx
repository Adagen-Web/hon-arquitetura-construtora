import { Link, useParams } from "react-router-dom";
import projectsData from "../data/projectsData";

const ProjectDetail = () => {
  const { slug } = useParams();
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[projectIndex];

  if (!project) {
    return <h2 className="text-center mt-20 text-2xl text-gray-600">Projeto não encontrado.</h2>;
  }

  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  return (
    <div className="bg-white text-[#313131]">
      {/* Imagem destaque */}
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-[500px] object-cover object-center"
      />

      {/* Informações principais */}
      <div className="container mx-auto px-6 sm:px-16 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Texto */}
        <div>
          <h1 className="text-2xl sm:text-4xl font-yantramanav font-light mb-6">
            {project.name}
          </h1>
          <ul className="space-y-3 text-lg sm:text-xl font-light">
            <li><strong className="font-semibold">Ano:</strong> {project.year}</li>
            <li><strong className="font-semibold">Tamanho:</strong> {project.size}m²</li>
            <li><strong className="font-semibold">Localização:</strong> {project.location}</li>
          </ul>
        </div>

        {/* Imagem secundária */}
        <div>
          <img
            src={project.secondaryImage}
            alt={project.name}
            className="w-full h-[400px] object-cover object-center rounded-md"
          />
        </div>
      </div>

      {/* Galeria de imagens */}
      <div className="container mx-auto px-6 sm:px-16 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery ${index}`}
              className="w-full h-auto object-cover rounded"
            />
          ))}
        </div>
      </div>

      {/* Navegação entre projetos */}
      <div className="container mx-auto px-6 sm:px-16 pb-16 flex justify-between items-center gap-4">
        {prevProject ? (
          <Link
            to={`/portfolio/${prevProject.slug}`}
            className="text-black text-base sm:text-lg hover:underline"
          >
            ← {prevProject.name}
          </Link>
        ) : <div />}

        {nextProject ? (
          <Link
            to={`/portfolio/${nextProject.slug}`}
            className="text-black text-base sm:text-lg hover:underline ml-auto"
          >
            {nextProject.name} →
          </Link>
        ) : <div />}
      </div>
    </div>
  );
};

export default ProjectDetail;
