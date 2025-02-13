import { Link, useParams } from "react-router-dom";
import projectsData from "../data/projectsData"; // Dados dos projetos

const ProjectDetail = () => {
  const { slug } = useParams(); // Pegamos o slug da URL
  const projectIndex = projectsData.findIndex((p) => p.slug === slug); // Encontramos o index
  const project = projectsData[projectIndex]; // Pegamos o projeto correto

  if (!project) {
    return <h2 className="text-center mt-10 text-2xl">Projeto não encontrado!</h2>;
  }

  // Pegando projetos anterior e próximo
  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  return (
    <div className="container mx-auto px-6 py-16">
      {/* Imagem de destaque */}
      <img src={project.image} alt={project.name} className="w-full h-auto object-cover rounded-lg" />

      {/* Informações do Projeto */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <div>
          <h1 className="text-4xl font-bold text-black">{project.name}</h1>
          <p className="text-lg text-gray-700 mt-4">
            <strong>Ano:</strong> {project.year}
          </p>
          <p className="text-lg text-gray-700 mt-2">
            <strong>Tamanho:</strong> {project.size}m²
          </p>
          <p className="text-lg text-gray-700 mt-2">
            <strong>Localização:</strong> {project.location}
          </p>
        </div>
        <div>
          <img src={project.secondaryImage} alt={project.name} className="w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Galeria de Imagens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {project.gallery.map((image, index) => (
          <img key={index} src={image} alt={`Gallery ${index}`} className="w-full h-auto rounded-lg" />
        ))}
      </div>

      {/* Navegação entre Projetos */}
      <div className="flex justify-between mt-12">
        {prevProject ? (
          <Link
            to={`/portfolio/${prevProject.slug}`}
            className="text-lg font-semibold text-black hover:underline"
          >
            ← {prevProject.name}
          </Link>
        ) : <div />}

        {nextProject ? (
          <Link
            to={`/portfolio/${nextProject.slug}`}
            className="text-lg font-semibold text-black hover:underline"
          >
            {nextProject.name} →
          </Link>
        ) : <div />}
      </div>
    </div>
  );
};

export default ProjectDetail;
