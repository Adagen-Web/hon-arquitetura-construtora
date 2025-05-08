import { Link, useParams } from "react-router-dom";
import projectsData from "../data/projectsData";
import { useEffect, useState } from "react";

const ProjectDetail = () => {
  const { slug } = useParams();
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[projectIndex];

  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  // Impede o scroll do body quando modal estiver ativo
  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "auto";
  }, [selectedIndex]);

  if (!project) {
    return <h2 className="text-center mt-20 text-2xl text-gray-600">Projeto não encontrado.</h2>;
  }

  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  const handlePrevImage = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedIndex < project.gallery.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

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
        <div>
          <h1 className="text-2xl sm:text-4xl font-yantramanav font-light mb-6">
            {project.name}
          </h1>
          <ul className="space-y-1 text-md sm:text-lg font-light">
            <li><strong className="font-semibold">Ano:</strong> {project.year}</li>
            <li><strong className="font-semibold">Tamanho:</strong> {project.size}m²</li>
            <li><strong className="font-semibold">Localização:</strong> {project.location}</li>
          </ul>
        </div>
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
              className="w-full h-auto object-cover rounded cursor-pointer hover:opacity-80 transition"
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Navegação entre projetos */}
      <div className="container mx-auto px-6 sm:px-16 pb-16 flex justify-between items-center gap-4">
        {prevProject ? (
          <Link
            to={`/projeto/${prevProject.slug}`}
            className="text-black text-base sm:text-lg hover:underline"
          >
            ← {prevProject.name}
          </Link>
        ) : <div />}

        {nextProject ? (
          <Link
            to={`/projeto/${nextProject.slug}`}
            className="text-black text-base sm:text-lg hover:underline ml-auto"
          >
            {nextProject.name} →
          </Link>
        ) : <div />}
      </div>

      {/* Modal de galeria */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative max-w-6xl w-full px-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão fechar */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 text-white text-3xl font-light hover:scale-110 transition"
            >
              &times;
            </button>

            {/* Imagem ampliada */}
            <img
              src={project.gallery[selectedIndex]}
              alt={`Imagem ${selectedIndex + 1}`}
              className="w-full max-h-[90vh] object-contain rounded"
            />

            {/* Setas de navegação */}
            {selectedIndex > 0 && (
              <button
                onClick={handlePrevImage}
                className="absolute cursor-pointer left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition"
              >
                ←
              </button>
            )}
            {selectedIndex < project.gallery.length - 1 && (
              <button
                onClick={handleNextImage}
                className="absolute cursor-pointer right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition"
              >
                →
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
