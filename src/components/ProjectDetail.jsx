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
    <div className="">
      {/* Imagem de destaque */}
      <img src={project.image} alt={project.name} className="w-full h-[1000px] object-cover object-center" />
      {/* <div className="container mx-auto px-6 py-16"> */}

        {/* Informações do Projeto */}
        <div className="items-center grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="ml-20">
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
            <img src={project.secondaryImage} alt={project.name} className="w-full h-[400px] object-cover object-center" />
          </div>
        </div>

        {/* Galeria de Imagens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-12">
          {project.gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery ${index}`}
              className="w-full h-auto object-cover"
            />
          ))}
        </div>

        {/* Navegação entre Projetos */}
        <div className="flex justify-between my-16 mx-16">
          {prevProject ? (
            <Link
              to={`/portfolio/${prevProject.slug}`}
              className="bg-black text-white px-6 py-3 text-lg font-medium uppercase tracking-wide transition-transform transform hover:scale-105"
            >
              ← {prevProject.name}
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link
              to={`/portfolio/${nextProject.slug}`}
              className="bg-black text-white px-6 py-3 text-lg font-medium uppercase tracking-wide transition-transform transform hover:scale-105"
            >
              {nextProject.name} →
            </Link>
          ) : <div />}
        </div>
      {/* </div> */}
    </div>
  );
};

export default ProjectDetail;
