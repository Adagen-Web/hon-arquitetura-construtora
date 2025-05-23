import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <section className="container mx-auto items-center justify-center py-16 sm:px-4 px-8">
      {/* Texto principal no topo */}
      <div className="mb-10">
        <h2 className="text-2xl sm:text-1xl text-[#050505] md:text-2xl lg:text-4xl font-yantramanav font-extralight text-primary leading-[1] text-left">
          Faça seu projeto<br /> dos sonhos conosco!
        </h2>
      </div>

      {/* Seção com informações de contato e formulário */}
      <div className="flex flex-col sm:flex-row items-start justify-between space-y-10 sm:space-y-0 sm:space-x-10">
        {/* Infos de Contato */}
        <div className="w-full sm:w-1/2">
          <ContactInfo />
        </div>

        {/* Formulário */}
        <div className="w-full items-center sm:w-1/2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
