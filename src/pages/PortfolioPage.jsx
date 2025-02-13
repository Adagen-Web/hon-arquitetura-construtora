import PortfolioHeader from "../components/PortfolioHeader";
import ProjectCard from "../components/ProjectCard";

const projectsData = [
  {
    id: 1,
    name: "Casa C10",
    slug: "casa-c10",
    image: "https://images.unsplash.com/photo-1496692052106-d37cb66ab80c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    name: "Residência Horizonte",
    slug: "residencia-horizonte",
    image: "https://images.unsplash.com/photo-1496692052106-d37cb66ab80c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Loft Industrial",
    slug: "loft-industrial",
    image: "https://images.unsplash.com/photo-1496692052106-d37cb66ab80c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    name: "Casa de Praia",
    slug: "casa-de-praia",
    image: "https://images.unsplash.com/photo-1496692052106-d37cb66ab80c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    name: "Apartamento Minimalista",
    slug: "apartamento-minimalista",
    image: "https://images.unsplash.com/photo-1496692052106-d37cb66ab80c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    name: "Escritório Moderno",
    slug: "escritorio-moderno",
    image: "https://images.unsplash.com/photo-1496692052106-d37cb66ab80c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWV8ZW58MHx8MHx8fDA%3D",
  },
];

const PortfolioPage = () => {

  return (
    <div className="">
      <PortfolioHeader />
      <ProjectCard projects={projectsData} />
    </div>
  );
};

export default PortfolioPage;
