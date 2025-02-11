import Button from "./Button";

const ContactForm = () => {
  return (
    <div className="border border-[#000000] p-12 w-full">
      <form className="flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <input
            type="text"
            placeholder="Nome"
            className="border border-[#000000] p-3 w-full sm:w-1/2"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-[#000000] p-3 w-full sm:w-1/2"
          />
        </div>

        <textarea
          placeholder="Mensagem"
          className="border border-[#000000] p-3 h-32 w-full"
        />

        <Button
          text="Enviar"
          className="bg-black text-white text-center w-full sm:w-32 self-end hover:bg-gray-800"
        />
      </form>
    </div>
  );
};

export default ContactForm;
