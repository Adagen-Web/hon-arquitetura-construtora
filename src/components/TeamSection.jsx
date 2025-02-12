const teamMembers = [
  {
    name: "NORTHON PASSAIA",
    role: "Sócio-Fundador & Diretor Executivo",
    profession: "Arquiteto e Urbanista",
    image: "https://github.com/Mateusp23.png",
  },
  {
    name: "DIEGO SCHUASTE MAGNUS",
    role: "Sócio & Coordenador de Projetos e Administrativo",
    profession: "Arquiteto e Urbanista",
    image: "https://github.com/Mateusp23.png",
  },
  {
    name: "BRENDA DA SILVA EUGÊNIO",
    role: "Associada & Coordenadora de Interiores",
    profession: "Arquiteta e Urbanista",
    image: "https://github.com/Mateusp23.png",
  },
  {
    name: "CATIELE DA SILVA",
    role: "Associada & Coordenadora de Projetos",
    profession: "Arquiteta e Urbanista",
    image: "https://github.com/Mateusp23.png",
  },
  {
    name: "LUIZ FERNANDO TRISTÃO SCHEFFER",
    role: "Coordenador de Processos Legais",
    profession: "Arquiteto e Urbanista",
    image: "https://github.com/Mateusp23.png",
  },
];

const TeamSection = () => {
  return (
    <section className="w-full py-16 text-center bg-white">
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-12">
        NOSSA EQUIPE
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-6 sm:gap-0 w-full">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${index === 0 ? "ml-0" : index === teamMembers.length - 1 ? "mr-0" : "px-4"
              }`}
          >
            {/* Imagem */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-80 object-cover"
            />

            {/* Nome */}
            <h3 className="text-lg font-semibold text-gray-800 mt-4">
              {member.name}
            </h3>

            {/* Cargo */}
            <p className="text-sm text-gray-600">{member.role}</p>

            {/* Profissão */}
            <p className="text-sm text-gray-600">{member.profession}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
