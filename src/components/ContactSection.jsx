import Button from "./Button";
import Divider from "./Divider";

const ContactSection = () => {
  return (
    <section className="flex flex-col items-center text-center py-20 px-6">
      <Divider className="mb-10" />
      <div className="w-[600px]">
        <h2 className="text-6xl font-yantramanav font-light text-[#313131]">
          Quer saber mais sobre os nossos projetos?
        </h2>
      </div>
      <Button
        text="entre em contato"
        onClick={() => { }}
        className="bg-black text-white mt-6 px-6 py-3 text-lg hover:bg-gray-800"
      />
    </section>
  );
};

export default ContactSection;
