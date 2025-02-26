import { useState } from "react";
import Button from "./Button";
import { FiCheckCircle } from "react-icons/fi"; // Ícone de sucesso

const ContactForm = () => {
  const [formData, setFormData] = useState({ nome: "", email: "", mensagem: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Remove erro ao digitar
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nome || !formData.email || !formData.mensagem) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("nome", formData.nome);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("mensagem", formData.mensagem);

      const response = await fetch("https://formsubmit.co/mateuspaulart@gmail.com", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ nome: "", email: "", mensagem: "" });
      } else {
        setError("Erro ao enviar o formulário. Tente novamente.");
      }
    } catch (error) {
      setError("Erro ao enviar o formulário. Verifique sua conexão.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border border-[#000000] p-12 w-full">
      {success ? (
        <div className="flex flex-col items-center text-center text-green-600">
          <FiCheckCircle size={48} />
          <p className="text-lg mt-2">Mensagem enviada com sucesso!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          {error && <p className="text-red-600 text-sm">{error}</p>}

          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Nome"
              required
              className="border border-[#000000] text-[#313131] p-3 w-full sm:w-1/2"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="border border-[#000000] text-[#313131] p-3 w-full sm:w-1/2"
            />
          </div>

          <textarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            placeholder="Mensagem"
            required
            className="border border-[#000000] p-3 h-32 w-full text-[#313131]"
          />

          <Button
            text={loading ? "Enviando..." : "Enviar"}
            type="submit"
            className="bg-black text-white text-center w-full sm:w-32 self-end hover:bg-gray-800"
            disabled={loading}
          />
        </form>
      )}
    </div>
  );
};

export default ContactForm;
