import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <section className="container mx-auto py-16 px-6">
      {/* Texto principal no topo */}
      <div className="mb-10 lg:ml-[17px] md:ml-[17px]">
        <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-yantramanav font-extralight text-primary leading-[1.1] text-left">
          Fale com a HON <br /> e transforme ideias <br /> em projetos reais.
        </h2>
      </div>

      {/* Seção com informações de contato e formulário */}
      <div className="flex flex-col sm:flex-row items-start justify-between space-y-10 sm:space-y-0 sm:space-x-10">
        {/* Infos de Contato */}
        <div className="w-full sm:w-1/2">
          <ContactInfo />
        </div>

        {/* Formulário */}
        <div className="w-full sm:w-1/2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
